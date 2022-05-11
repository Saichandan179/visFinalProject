import "./App.css";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import RangeSlider from "./components/rangeSliders";
import OptionSlider from "./components/optionSlider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import BarChart from "./components/barChart";
import RadarChartWrap from "./components/radarChart";
import WorldMap from './components/worldMap';
import {
  dummyBarChartData,
  dummyLabels,
  pcptempdata
} from "./dummydata";
import StackedAreaChart from "./components/stackAreaChart";
import {getStackedAreaData, getPCPdata} from './functionutils';
import { PCP } from './components/PCP';

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

  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <Grid container spacing={1} style={{ height: "102vh" }}>
            <Grid item xs={6}>
              <Item>
                <WorldMap
                  selectCountry={(country) => {
                    // console.log("Selected country: "+country);
                    // console.log("prev state: "+countries)
                    const index = countries.findIndex(name => name === country); //use id instead of index
                    if (index > -1) {
                      setCountries(countries.filter(nm => nm !== country));
                    } else {
                      setCountries(prevState => [...prevState, country]);
                    }
                    // console.log(countries);
                  }}
                  />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item><PCP data={getPCPdata(countries, [2000, 2006])}/></Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <StackedAreaChart
                  width={400}
                  height={400}
                  data={getStackedAreaData(countries, [2000, 2006], "population")}
                  range={[2000, 2006]}
                  countries={countries}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <RadarChartWrap width={400} height={400} />
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Stack
            sx={{ height: 600 }}
            spacing={3}
            direction="column"
            style={{ padding: "20%" }}
          >
            <Button variant="outlined" startIcon={<RestartAltIcon />}>
              RST
            </Button>
            <OptionSlider />
            <RangeSlider />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Item style={{ height: "100vh" }}>
            <BarChart
              width={400}
              height={800}
              data={dummyBarChartData}
              labels={dummyLabels}
            />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
