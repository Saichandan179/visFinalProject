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
        for(var j = 0; j < range.length; j++){
            if(ans.length == 0){
                obj = {
                    country: countries[i],
                    year: range[j],
                    value0: 0,
                    value1: data[range[j]][countries[i]]
                }
            } else {
                obj = {
                    country: countries[i],
                    year: range[j],
                    value0: ans[ans.length - 1][j].value1,
                    value1: ans[ans.length - 1][j].value1 + data[range[j]][countries[i]]
                }
            }
            sub.push(obj);
        }
        ans.push(sub);
    }
    console.log(ans);
    return ans;
}
