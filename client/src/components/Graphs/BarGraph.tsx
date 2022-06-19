import { SVGProps, useEffect, useRef, useState } from "react";
import { AirTrafficData } from "../../types/airTrafficData";
import * as d3 from "d3";

const BarGraph = () => {
  const [data, setData] = useState<AirTrafficData>();
  const graph = useRef<SVGSVGElement>(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/all")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  
  useEffect(() => {
    const svgElement = d3.select(graph.current)
    svgElement.append("circle")
      .attr("cx", 150)
      .attr("cy", 70)
      .attr("r",  50)
  }, [])


  return <svg ref={graph}></svg>;
};

export default BarGraph;
