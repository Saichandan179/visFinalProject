import "./App.css";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
// import RangeSlider from "./components/rangeSliders";
// import OptionSlider from "./components/optionSlider";
import BarChart from "./components/barChart";
import RadarChartWrap from "./components/radarChart";
import WorldMap from "./components/worldMap";
import { dummyLabels } from "./dummydata";
import StackedAreaChart from "./components/stackAreaChart";
import {
  getStackedAreaData,
  getPCPdata,
  getRadarChartData,
  getBarChartData,
  marks,
  optionmarks,
  valuetext,
  toLabel
} from "./functionutils";
import { PCP } from "./components/PCP";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "46vh",
  color: "white",
}));

function App() {
  useEffect(() => {
    console.log(countries);
  }, [countries]);

  const [countries, setCountries] = useState([]);
  const [rangeValue, setRangeValue] = React.useState([2000, 2020]);
  const [optionValue, setoptionValue] = React.useState("gdp");

  const handleOptionChange = (event, newoptionValue) => {
    setoptionValue(newoptionValue);
  };

  const handleRangeChange = (event, newValue) => {
    setRangeValue(newValue);
  };

  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={9}>
          <Grid container spacing={1} style={{ height: "102vh" }}>
            <Grid item xs={5}>
              <Item>
                <WorldMap
                  selectCountry={(country) => {
                    // console.log("Selected country: "+country);
                    // console.log("prev state: "+countries)
                    const index = countries.findIndex(
                      (name) => name === country
                    ); //use id instead of index
                    if (index > -1) {
                      setCountries(countries.filter((nm) => nm !== country));
                    } else {
                      setCountries((prevState) => [...prevState, country]);
                    }
                    // console.log(countries);
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <PCP data={getPCPdata(countries, rangeValue)} />
              </Item>
            </Grid>
            <Grid item xs={2} style={{ padding: "60px 0 60px 0" }}>
            <Slider
        getAriaLabel={() => "Years range"}
        value={optionValue}
        onChange={handleOptionChange}
        getAriaValueText={valuetext}
        orientation="vertical"
        marks={optionmarks}
        track={false}
        min={1}
        max={3}
      />
            </Grid>
            <Grid item xs={5} style={{ paddingTop: "0px" }}>
              <Item>
                <StackedAreaChart
                  width={500}
                  height={500}
                  data={getStackedAreaData(countries, rangeValue, toLabel(optionValue))}
                  range={rangeValue}
                  countries={countries}
                  labels={{yLabel: `${toLabel(optionValue)}`, xLabel: 'year'}}
                />
              </Item>
            </Grid>
            <Grid item xs={5} style={{ paddingTop: "0px" }}>
              <Item>
                {countries.length > 0 && (
                  <RadarChartWrap
                    data={getRadarChartData(countries, rangeValue)}
                    width={400}
                    height={400}
                  />
                )}
              </Item>
            </Grid>
            <Grid item xs={2} style={{ padding: "60px 0 60px 0" }}>
              <Slider
                getAriaLabel={() => "Years range"}
                value={rangeValue}
                onChange={handleRangeChange}
                getAriaValueText={valuetext}
                orientation="vertical"
                marks={marks}
                min={2000}
                max={2020}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Item style={{ height: "100vh" }}>
            <BarChart
              width={400}
              height={800}
              data={getBarChartData(countries, rangeValue, toLabel(optionValue))}
              labels={{
                title: `Country vs ${toLabel(optionValue)}`,
                xLabel: toLabel(optionValue),
              }}
            />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
