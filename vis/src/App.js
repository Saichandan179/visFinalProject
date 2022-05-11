import "./App.css";
import React, { useEffect } from "react";
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
import {
  dummyBarChartData,
  dummyLabels,
  dummyStackedAreaData,
} from "./dummydata";
import StackedAreaChart from "./components/stackAreaChart";
import {getStackedAreaData} from './functionutils';

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
    getStackedAreaData(["India", "China", "Japan"], [2000, 2001, 2002, 2003, 2004, 2005, 2006], "population");
  }, []);

  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <Grid container spacing={1} style={{ height: "102vh" }}>
            <Grid item xs={6}>
              <Item>World Map</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>PCP</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <StackedAreaChart
                  width={400}
                  height={400}
                  data={dummyStackedAreaData}
                  range={[2000, 2003]}
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
