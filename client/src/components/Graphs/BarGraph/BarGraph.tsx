import { useContext, useEffect, useRef, useState } from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { AirTraffic } from "../../../types/airTrafficData";
import * as d3 from "d3";
import { GraphControlsContext } from "../Graph";

interface CombinedMonthAverageDelay {
  month: string;
  average_delay: number;
}

const BarGraph = () => {
  const [data, setData] = useState<CombinedMonthAverageDelay[]>();
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const controlContext = useContext(GraphControlsContext);
  const urlBuilder = (): string =>
    "http://localhost:5001/api/" +
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
          buildBarGraph(data, 500, 500);
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

  const buildBarGraph = (
    airTraffic: CombinedMonthAverageDelay[],
    height: number,
    width: number
  ) => {
    const margin = { top: 10, bottom: 55, left: 50, right: 30 };

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
      .domain(airTraffic.map((x) => x.month))
      .padding(0.5);

    barGraph
      .append("text")
      .attr("x", calcWidth / 2)
      .attr("y", calcHeight + margin.bottom)
      .style("text-anchor", "middle")
      .attr("fill", themeColor === "light" ? "#000000" : "#ffffff")
      .text(
        controlContext.state.xAxis[0].toUpperCase() +
          controlContext.state.xAxis.slice(1)
      );

    barGraph
      .append("g")
      .attr("transform", `translate(0, ${calcHeight})`)
      .call(d3.axisBottom(xAxis))
      .selectAll("text")
      .attr("transform", "translate(10,5)")
      .style("text-anchor", "end");

    const yAxis = d3
      .scaleLinear()
      .domain([0, Math.max(...airTraffic.map((x) => x.average_delay)) + 3])
      .range([calcHeight, 0]);

    barGraph
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - calcHeight / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
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
      .attr("x", function (d): any {
        return xAxis(d.month);
      })
      .attr("width", xAxis.bandwidth())
      .attr("fill", "rgb(39 157 210)")
      .attr("height", function (d) {
        return calcHeight - yAxis(0);
      })
      .attr("y", function (d) {
        return yAxis(0);
      });

    barGraph
      .selectAll("rect")
      .data(airTraffic)
      .transition()
      .duration(1000)
      .attr("y", function (d): any {
        return yAxis(d.average_delay);
      })
      .attr("height", function (d) {
        return calcHeight - yAxis(d.average_delay);
      });
  };

  return (
    <Box width="60vw" height="60vh" pl="10vw">
      {error && (
        <Text fontSize="3xl">
          Unfortunately an error occurred when trying to fetch the data. Further
          information: {errorMessage}
        </Text>
      )}
      <svg ref={graph} width="60vw" height="60vh"></svg>
    </Box>
  );
};

export default BarGraph;
