import {militaryExpData, gdpData, populationData} from './dummydata';

export const getStackedAreaData = (countries, range, plot) => {
    let ans = [], data;
    if(plot === 'population'){
        data = populationData;
    } else if(plot === 'gdp'){
        data = gdpData;
    } else {
        data = militaryExpData;
    }

    for(var i = 0; i < countries.length; i++){
        let sub = [], obj = {};
        for(var j = range[0]; j <= range[1]; j++){
            if(ans.length == 0){
                obj = {
                    country: countries[i],
                    year: j,
                    value0: 0,
                    value1: data[j][countries[i]]
                }
            } else {
                obj = {
                    country: countries[i],
                    year: j,
                    value0: ans[ans.length - 1][j-range[0]].value1,
                    value1: ans[ans.length - 1][j-range[0]].value1 + data[j][countries[i]]
                }
            }
            sub.push(obj);
        }
        ans.push(sub);
    }
    // console.log(ans);
    return ans;
}

export const getPCPdata = (countries, range) => {
    let data = [];
    for(var i = 0; i < countries.length; i++){
        for(var j = range[0]; j <= range[1]; j++){
            let obj = {
                year: String(j),
                country: countries[i],
                color: i,
                population: populationData[j][countries[i]],
                gdp: parseFloat(gdpData[j][countries[i]]),
                "Military Expenditure": militaryExpData[j][countries[i]]
            }

            data.push(obj);
        }
    }

    return data;
}

export const getRadarChartData = (countries, range) => {
    let data = [];
    let maxGDP = 0, maxMil = 0, maxPop = 0;
    for(var i = 0; i < countries.length; i++){
        maxGDP = Math.max(maxGDP, parseFloat(gdpData[range[1]][countries[i]]));
        maxMil = Math.max(maxMil, militaryExpData[range[1]][countries[i]]);
        maxPop = Math.max(maxPop, populationData[range[1]][countries[i]]);
        console.log("logging values", maxGDP, maxMil, maxPop);
        
    }

    for(var i = 0; i < countries.length; i++){
        let objarr = [
            { axis: "Military Expenditure", value: parseFloat(militaryExpData[range[1]][countries[i]])/maxMil },
            { axis: "Population", value: parseFloat(populationData[range[1]][countries[i]])/maxPop },
            { axis: "GDP", value: parseFloat(gdpData[range[1]][countries[i]])/maxGDP }
        ];
        
        data.push(objarr);
    }

    return data;

}

export const getBarChartData = (countries, range, plot) => {
    let data, datatoreturn = {};
    if(plot === 'population'){
        data = populationData;
    } else if(plot === 'gdp'){
        data = gdpData;
    } else {
        data = militaryExpData;
    }

    for(var i = 0; i < countries.length; i++){
        datatoreturn[countries[i]] = data[range[1]][countries[i]];
    }
    // console.log("returning data", datatoreturn);
    return datatoreturn;
}

export const displayText = (val) => {
    if(val > 1000000000000){
        return `${parseInt(val/100000000000)/10}T`;
    } else if(val > 1000000000){
        return `${parseInt(val/100000000)/10}B`;
    } else if(val > 1000000){
        return `${parseInt(val/100000)/10}M`;
    }  else return `${val}`;
}