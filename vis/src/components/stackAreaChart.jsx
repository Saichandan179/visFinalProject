import * as d3 from "d3";
import React, { useRef, useEffect } from "react";
// import {dummyStackedAreaData} from "../dummydata";

function StackedAreaChart({ width, height, data, range, labels }) {
  const ref = useRef();

  useEffect(() => {
    d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
    draw();
  }, []);

  useEffect(() => {
      let svg = d3.select(ref.current);
      svg.selectAll('*').remove();
      draw();
  }, [data]);

  const draw = () => {
    var margin = { top: 30, right: 30, bottom: 90, left: 30 },
      width = 400 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3
      .scaleLinear()
      .domain(range)
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(5));

    // Add Y axis
    var y = d3
      .scaleLinear()
      .domain([
        0,
        300
      ])
      .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    var color = d3.scaleOrdinal()
    .domain(["India", "China", "USA"])
    .range(['377eb8','#e41a1c','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])

    // var color = ['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf'];

    svg
    .selectAll("mylayers")
    .data(data)
    .enter()
    .append("path")
      .style("fill", function(d, i) { return color(d[0].country) })
      .attr("d", d3.area()
        .x(function(d, i) { return x(d.year); })
        .y0(function(d) { return y(d.value0); })
        .y1(function(d) { return y(d.value1); })
    )
    
  };

  return (
    <div className="Chart" style={{ marginRight: "70px" }}>
      <svg ref={ref}></svg>
    </div>
  );
}

export default StackedAreaChart;
