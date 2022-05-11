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
                gdp: gdpData[j][countries[i]],
                "Military Expenditure": militaryExpData[j][countries[i]]
            }

            data.push(obj);
        }
    }

    return data;
}
