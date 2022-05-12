import * as d3 from "d3";
import React, { useRef, useEffect } from "react";
import {displayText} from '../functionutils';
// import {dummyStackedAreaData} from "../dummydata";

function StackedAreaChart({ width, height, data, range, countries }) {
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
    var margin = { top: 50, right: 80, bottom: 100, left: 20 },
      width = 500 - margin.left - margin.right,
      height = 480 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + 50 + "," + 50+ ")");

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
        1.5*Math.max(...data.map(arr => Math.max(...arr.map(o=>o.value1))))
      ])
      .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y).tickFormat((d,i) => displayText(d)));

    const color = ["#5adfe8", "#64a5f5", "#6df7e3"]

    // var color = ['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf'];

    svg
    .selectAll("mylayers")
    .data(data)
    .enter()
    .append("path")
      .style("fill", function(d, i) { return color[i] })
      .attr("d", d3.area()
        .x(function(d, i) { return x(d.year); })
        .y0(function(d) { return y(d.value0); })
        .y1(function(d) { return y(d.value1); })
    )
    
  };

  return (
    <div className="Chart" >
      <svg ref={ref}></svg>
    </div>
  );
}

export default StackedAreaChart;
