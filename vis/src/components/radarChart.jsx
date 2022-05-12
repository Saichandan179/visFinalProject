import * as d3 from "d3";
import React, { useEffect } from "react";
import RadarChart from "./radarChart1";
// import RadarChart from 'react-svg-radar-chart';
// import 'react-svg-radar-chart/build/css/index.css'

/*
    Notes: need to calculate max pop and divide all of them with that,
    could be useful we could add a tooltip to indicate the country
*/

function RadarChartWrap({ data, width, height }) {
  useEffect(() => {
    d3.select(".radarChart")
      .attr("width", width)
      .attr("height", height);
  }, []);

  useEffect(() => {
    let svg = d3.select(".radarChart");
    svg.selectAll("*").remove();
    draw();
  }, [data]);

  const draw = () => {
    var margin = { top: 75, right: 80, bottom: 80, left: 80 },
      width =
        Math.min(490, window.innerWidth - 10) - margin.left - margin.right,
      height = Math.min(
        width,
        window.innerHeight - margin.top - margin.bottom - 20
      );

    // var data = [
    //   [
    //     //iPhone
    //     { axis: "Battery Life", value: 0.22 },
    //     { axis: "Brand", value: 0.28 },
    //     { axis: "Contract Cost", value: 0.29 },
    //     { axis: "Design And Quality", value: 0.17 },
    //     { axis: "Have Internet Connectivity", value: 0.22 },
    //     { axis: "Large Screen", value: 0.02 },
    //     { axis: "Price Of Device", value: 0.21 },
    //     { axis: "To Be A Smartphone", value: 0.5 },
    //   ],
    //   [
    //     //Samsung
    //     { axis: "Battery Life", value: 0.27 },
    //     { axis: "Brand", value: 0.16 },
    //     { axis: "Contract Cost", value: 0.35 },
    //     { axis: "Design And Quality", value: 0.13 },
    //     { axis: "Have Internet Connectivity", value: 0.2 },
    //     { axis: "Large Screen", value: 0.13 },
    //     { axis: "Price Of Device", value: 0.35 },
    //     { axis: "To Be A Smartphone", value: 0.38 },
    //   ],
    //   [
    //     //Nokia Smartphone
    //     { axis: "Battery Life", value: 0.26 },
    //     { axis: "Brand", value: 0.1 },
    //     { axis: "Contract Cost", value: 0.3 },
    //     { axis: "Design And Quality", value: 0.14 },
    //     { axis: "Have Internet Connectivity", value: 0.22 },
    //     { axis: "Large Screen", value: 0.04 },
    //     { axis: "Price Of Device", value: 0.41 },
    //     { axis: "To Be A Smartphone", value: 0.3 },
    //   ],
    // ];

    // var color = d3.scale().ordinal().range(["#EDC951", "#CC333F", "#00A0B0"]);
    var color = ["#EDC951", "#CC333F", "#00A0B0"];

    var radarChartOptions = {
      w: width,
      h: height,
      margin: margin,
      maxValue: 0.5,
      levels: 5,
      roundStrokes: true,
      color: color,
    };
    //Call function to draw the Radar chart
    RadarChart(".radarChart", data, radarChartOptions);
  };

  return <div class="radarChart" style={{padding: 0, margin: 0}}></div>;
}

export default RadarChartWrap;
