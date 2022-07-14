import { useContext, useEffect, useRef, useState } from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import * as d3 from "d3";
import { GraphControlsContext } from "../Graph";
import { months } from "../../../types/airTrafficData";

type CombinedMonthAverageDelay = {
  month: string;
  average_delay: number;
};

type CombinedAirportAverageDelay = {
  airport: string;
  average_delay: number;
};

const BarGraph = () => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5001/api/"
      : "https://flight-insights.gschandan.dev/api/";

  const [data, setData] =
    useState<(CombinedMonthAverageDelay | CombinedAirportAverageDelay)[]>();
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const controlContext = useContext(GraphControlsContext);
  const urlBuilder = (): string =>
    baseUrl +
    controlContext.state.dataset +
    "/" +
    controlContext.state.graphType +
    "/" +
    controlContext.state.xAxis +
    "/" +
    controlContext.state.yAxis;
  const [url, setUrl] = useState<string>(urlBuilder);

  const graph = useRef<SVGSVGElement>(null);
  const themeColor = useColorModeValue("light", "dark");

  useEffect(() => {
    setUrl(urlBuilder());
  }, [controlContext.state]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setData(response))
      .then(() => {
        if (data !== undefined) {
          buildBarGraph(data, 500, 600);
          setError(false);
        } else {
          throw new Error("Unable to load the data");
        }
      })
      .catch((error: Error) => {
        setError(true);
        setErrorMessage(error.message);
      });
  }, [errorMessage, themeColor, url]);

  const buildBarGraph = (airTraffic: any[], height: number, width: number) => {
    const margin = { top: 10, bottom: 100, left: 50, right: 10 };

    const barGraph = d3
      .select(graph.current)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(-${margin.left},-${margin.top})`);

    const calcWidth = width - margin.left - margin.right;
    const calcHeight = height - margin.top - margin.bottom;

    const xAxis = d3
      .scaleBand()
      .range([0, calcWidth])
      .domain(
        controlContext.state.xAxis === "month"
          ? airTraffic.map((x: CombinedMonthAverageDelay) => x.month)
          : airTraffic.map((x: CombinedAirportAverageDelay) => x.airport)
      )
      .padding(0.2);

    barGraph
      .append("g")
      .attr("transform", `translate(0, ${calcHeight})`)
      .call(d3.axisBottom(xAxis))
      .selectAll("text")
      .attr("transform", "translate(-5,2) rotate(-45)")
      .style("text-anchor", "end")
      .style("font-size", "8px");

    const yAxis = d3
      .scaleLinear()
      .domain([
        0,
        Math.max(
          ...airTraffic.map((x: CombinedAirportAverageDelay) => x.average_delay)
        ) + 2,
      ])
      .range([calcHeight, 0]);

    barGraph
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - calcHeight / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-size", "12px")
      .attr("fill", themeColor === "light" ? "#000000" : "#ffffff")
      .text(
        controlContext.state.yAxis[0].toUpperCase() +
          controlContext.state.yAxis.slice(1) +
          " (minutes)"
      );

    barGraph.append("g").call(d3.axisLeft(yAxis));

    barGraph
      .selectAll("mybar")
      .data(airTraffic)
      .enter()
      .append("rect")
      .attr("x", function (d: any): any {
        if (controlContext.state.xAxis === "month") {
          airTraffic.sort(
            (a, b) => months.indexOf(a.month) - months.indexOf(b.month)
          );
          return xAxis(d.month);
        }
        return xAxis(d.airport);
      })
      .attr("width", xAxis.bandwidth())
      .attr("fill", "rgb(39 157 210)")
      .attr("height", function (d) {
        return calcHeight - yAxis(0);
      })
      .attr("y", function (d) {
        return yAxis(0);
      })
      .on("mouseover", function () {
        d3.select(this).attr("fill", "rgb(162, 44, 39)");
      })
      .on("mouseout", function (d, i) {
        d3.select(this).attr("fill", function () {
          return "rgb(39 157 210)";
        });
      });

    barGraph
      .selectAll("rect")
      .data(airTraffic)
      .transition()
      .duration(1000)
      .attr("y", function (d: any): any {
        return yAxis(d.average_delay);
      })
      .attr("height", function (d: any) {
        return calcHeight - yAxis(d.average_delay);
      });
  };

  return (
    <Flex width="70vw" height="65vh" justify="center">
      {error && (
        <Text fontSize="3xl">
          Unfortunately an error occurred when trying to fetch the data. Further
          information: {errorMessage}
        </Text>
      )}
      <svg ref={graph} width="70vw" height="60vh"></svg>
    </Flex>
  );
};

export default BarGraph;
