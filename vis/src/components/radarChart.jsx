import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

/*
    Notes: need to calculate max pop and divide all of them with that,
    could be useful we could add a tooltip to indicate the country
 */

function RadarChartWrap({ data}){
    return (
        <RadarChart
            captions={{
              // columns
              population: 'Population',
              miltaryExpenditure: 'Military Expense',
              GDP: 'GDP'
            }}
            data={[
              // data
              {
                data: {
                    population: 1,
                    miltaryExpenditure: 0.9,
                    GDP: 0.89
                },
                meta: { color: 'blue' }
              },
              {
                data: {
                    population: 0.5,
                    miltaryExpenditure: 0.6,
                    GDP: 0.7
                },
                meta: { color: 'red' }
              }
            ]}
            size={350}
          />
        
    )
}

export default RadarChartWrap;

