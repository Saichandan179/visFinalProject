import "./App.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import RangeSlider from "./components/rangeSliders";
import OptionSlider from "./components/optionSlider";
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "46vh",
  color: "white",
}));

function App() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <Grid container spacing={2} style={{ height: "102vh" }}>
            <Grid item xs={6}>
              <Item>World Map</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Multiline Plot</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Stack Area Plot</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Radar Plot</Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
        <Stack sx={{ height: 600 }} spacing={3} direction="column" style={{padding: "40%"}}>
          <OptionSlider/>
          <RangeSlider/>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Item style={{height: "100vh"}}>Barchart</Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
