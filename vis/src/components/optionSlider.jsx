import * as React from "react";
import Slider from "@mui/material/Slider";
import "../App.css";

const marks = [
  {
    value: 1,
    label: "population",
  },
  {
    value: 2,
    label: "Military Exp",
  },
  {
    value: 3,
    label: "GDP",
  }
];

function valuetext(value) {
    return `${value}`;
  }

export default function OptionSlider() {

    const [value, setValue] = React.useState(1); 
  const handleChange = (event, newValue) => {
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
        track={false}
        min={1}
        max={3}
      />
  );
}
