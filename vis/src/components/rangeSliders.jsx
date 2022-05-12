import * as React from "react";
import Slider from "@mui/material/Slider";
import "../App.css";

const marks = [
  {
    value: 2000,
    label: "2000",
  },
  {
    value: 2001,
    label: "",
  },
  {
    value: 2002,
    label: "",
  },
  {
    value: 2003,
    label: "",
  },
  {
    value: 2004,
    label: "2004",
  },
  {
    value: 2005,
    label: "",
  },
  {
    value: 2006,
    label: "",
  },
  {
    value: 2007,
    label: "",
  },
  {
    value: 2008,
    label: "2008",
  },
  {
    value: 2009,
    label: "",
  },
  {
    value: 2010,
    label: "",
  },
  {
    value: 2011,
    label: "",
  },
  {
    value: 2012,
    label: "2012",
  },
  {
    value: 2013,
    label: "",
  },
  {
    value: 2014,
    label: "",
  },
  {
    value: 2015,
    label: "",
  },
  {
    value: 2016,
    label: "2016",
  },
  {
    value: 2017,
    label: "",
  },
  {
    value: 2018,
    label: "",
  },
  {
    value: 2019,
    label: "",
  },
  {
    value: 2020,
    label: "2020",
  },
];

function valuetext(value) {
    return `${value}`;
  }

export default function RangeSlider() {
  const [rangeValue, setRangeValue] = React.useState([2000, 2020]);

  const handleRangeChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Slider
        getAriaLabel={() => "Years range"}
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        orientation="vertical"
        marks={marks}
        min={2000}
        max={2020}
      />
  );
}
