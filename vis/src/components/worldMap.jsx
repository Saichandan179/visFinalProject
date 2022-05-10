import * as d3 from "d3";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
// import {dummyStackedAreaData} from "../dummydata";
import MapChart from "./MapChart";

function WorldMap({ selectCountry }) {
  const ref = useRef();

  const [content, setContent] = useState("");

  return (
    <div className="Chart" >
      {/* <svg ref={ref}></svg> */}
      <div>
        <MapChart selectCountry={selectCountry} setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}

export default WorldMap;
