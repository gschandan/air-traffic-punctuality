import { useEffect, useRef, useState } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { AirTraffic } from "../../types/airTrafficData";
import * as d3 from "d3";

const BarGraph = () => {
  const [data, setData] = useState<AirTraffic[]>();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const graph = useRef<SVGSVGElement>(null);
  const themeColor = useColorModeValue("light", "dark");

  useEffect(() => {
    fetch("http://localhost:5001/api/all")
      .then((response) => response.json())
      .then((response) => setData(response))
      .then(() => {
        if (data !== undefined) {
          buildBarGraph(data, 600, 600);
          setError(false);
        } else {
          throw new Error("Unable to load the data");
        }
      })
      .catch((error: Error) => {
        setError(true);
        setErrorMessage(error.message);
      });
  }, [errorMessage, themeColor]);

  const buildBarGraph = (
    airTraffic: AirTraffic[],
    height: number,
    width: number
  ) => {
    const margin = { top: 10, bottom: 55, left: 55, right: 30 };

    const barGraph = d3
      .select(graph.current)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(-${margin.left},-${margin.top})`);

    const calcWidth = width - margin.left - margin.right;
    const calcHeight = height - margin.top - margin.bottom;

    const groupedDataByMonth = groupedDelaysByMonthAllAirports(airTraffic);
    const averagedData = averageGroupedDelaysByMonth(groupedDataByMonth);

    const xAxis = d3
      .scaleBand()
      .range([0, calcWidth])
      .domain(Object.keys(groupedDataByMonth))
      .padding(0.5);

    barGraph
      .append("text")
      .attr("x", calcWidth / 2)
      .attr("y", calcHeight + margin.bottom)
      .style("text-anchor", "middle")
      .attr("fill", themeColor === "light" ? "#000000" : "#ffffff")
      .text("Month");

    barGraph
      .append("g")
      .attr("transform", `translate(0, ${calcHeight})`)
      .call(d3.axisBottom(xAxis))
      .selectAll("text")
      .attr("transform", "translate(-10,5)rotate(-45)")
      .style("text-anchor", "end");

    const yAxis = d3
      .scaleLinear()
      .domain([0, Math.max(...averagedData.map((d) => d.average)) + 3])
      .range([calcHeight, 0]);

    barGraph
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - calcHeight / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .attr("fill", themeColor === "light" ? "#000000" : "#ffffff")
      .text("Average Delay (minutes)");

    barGraph.append("g").call(d3.axisLeft(yAxis));

    barGraph
      .selectAll("mybar")
      .data(averagedData)
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
      .data(averagedData)
      .transition()
      .duration(1000)
      .attr("y", function (d): any {
        return yAxis(d.average);
      })
      .attr("height", function (d) {
        return calcHeight - yAxis(d.average);
      });
  };

  const averageGroupedDelaysByMonth = (data: any) => {
    const results: AverageDelayAllAirportsByMonth[] = [];
    Object.keys(data).forEach((key) => {
      let value = data[key];
      let average =
        value.reduce((a: number, b: number) => a + b, 0) / value.length || 0;
      results.push({
        month: key,
        average: Number(average.toPrecision(2)),
      });
    });
    return results;
  };

  const groupedDelaysByMonthAllAirports = (data: AirTraffic[]) => {
    return data.reduce((acc: any, item) => {
      acc[item.month] = acc[item.month] || [];
      acc[item.month].push(item.average_delay_minutes);
      return acc;
    }, new DelayAllAirportsByMonth());
  };

  class DelayAllAirportsByMonth {
    [Key: string]: number[];
  }
  interface AverageDelayAllAirportsByMonth {
    month: string;
    average: number;
  }

  return (
    <>
      {error && (
        <Text fontSize="3xl">
          Unfortunately an error occurred when trying to fetch the data. Further
          information: {errorMessage}
        </Text>
      )}
      <svg ref={graph} width="70vw" height="60vh"></svg>
    </>
  );
};

export default BarGraph;
