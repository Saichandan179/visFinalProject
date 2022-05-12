import { militaryExpData, gdpData, populationData } from "./dummydata";

export const marks = [
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

export const optionmarks = [
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

export const toLabel = (val) => {
    if(val === 1) return "population";
    else if(val === 2) return "Military Exp";
    else if(val === 3) return "gdp";
};

export function valuetext(value) {
  return `${value}`;
};

export const getStackedAreaData = (countries, range, plot) => {
  let ans = [],
    data;
  if (plot === "population") {
    data = populationData;
  } else if (plot === "gdp") {
    data = gdpData;
  } else {
    data = militaryExpData;
  }

  for (var i = 0; i < countries.length; i++) {
    let sub = [],
      obj = {};
    for (var j = range[0]; j <= range[1]; j++) {
      if (ans.length == 0) {
        obj = {
          country: countries[i],
          year: j,
          value0: 0,
          value1: parseInt(data[j][countries[i]]),
        };
      } else {
        obj = {
          country: countries[i],
          year: j,
          value0: ans[ans.length - 1][j - range[0]].value1,
          value1:
            ans[ans.length - 1][j - range[0]].value1 +
            parseInt(data[j][countries[i]]),
        };
      }
      sub.push(obj);
    }
    ans.push(sub);
  }
  // console.log(ans);
  return ans;
};

export const getPCPdata = (countries, range) => {
  let data = [];
  for (var i = 0; i < countries.length; i++) {
    for (var j = range[0]; j <= range[1]; j++) {
      let obj = {
        year: String(j),
        country: countries[i],
        color: i,
        population: populationData[j][countries[i]],
        gdp: parseFloat(gdpData[j][countries[i]]),
        "Military Expenditure": militaryExpData[j][countries[i]],
      };

      data.push(obj);
    }
  }

  return data;
};

export const getRadarChartData = (countries, range) => {
  let data = [];
  let maxGDP = 0,
    maxMil = 0,
    maxPop = 0;
  for (var i = 0; i < countries.length; i++) {
    maxGDP = Math.max(maxGDP, parseFloat(gdpData[range[1]][countries[i]]));
    maxMil = Math.max(maxMil, militaryExpData[range[1]][countries[i]]);
    maxPop = Math.max(maxPop, populationData[range[1]][countries[i]]);
    console.log("logging values", maxGDP, maxMil, maxPop);
  }

  for (var i = 0; i < countries.length; i++) {
    let objarr = [
      {
        axis: "Military Expenditure",
        value: parseFloat(militaryExpData[range[1]][countries[i]]) / maxMil,
        country: countries[i]
      },
      {
        axis: "Population",
        value: parseFloat(populationData[range[1]][countries[i]]) / maxPop,
        country: countries[i]
      },
      {
        axis: "GDP",
        value: parseFloat(gdpData[range[1]][countries[i]]) / maxGDP,
        country: countries[i]
      },
    ];

    data.push(objarr);
  }

  return data;
};

export const getBarChartData = (countries, range, plot) => {
  let data,
    datatoreturn = {};
  if (plot === "population") {
    data = populationData;
  } else if (plot === "gdp") {
    data = gdpData;
  } else {
    data = militaryExpData;
  }

  for (var i = 0; i < countries.length; i++) {
    datatoreturn[countries[i]] = data[range[1]][countries[i]];
  }
  // console.log("returning data", datatoreturn);
  return datatoreturn;
};

export const displayText = (val) => {
  if (val > 1000000000000) {
    return `${parseInt(val / 100000000000) / 10}T`;
  } else if (val > 1000000000) {
    return `${parseInt(val / 100000000) / 10}B`;
  } else if (val > 1000000) {
    return `${parseInt(val / 100000) / 10}M`;
  } else return `${val}`;
};
