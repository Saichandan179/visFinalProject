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
                    population: 0.8,
                    miltaryExpenditure: 0.6,
                    GDP: 0.8
                },
                meta: { color: 'blue' }
              },
              {
                data: {
                    population: 0.6,
                    miltaryExpenditure: 0.8,
                    GDP: 1
                },
                meta: { color: 'red' }
              }
            ]}
            size={350}
          />
        
    )
}

export default RadarChartWrap;

