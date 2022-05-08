export const dummyBarChartData = {
    India: 2660245248867,//2660B
    Austialia: 1327836171068,//1327B
    Belgium: 521861292586,//521B
    Brazil: 1444733258971,//1444B
    Canada: 1645423407568,//1645B
    Cuba: 107352000000,//107B
    Spain: 1281484640043,//1281B
    Guinea: 15681050917,//15B
    Iraq: 166756984395,//166B
    Japan: 5057758958706,//5057B
    Kenya: 101013726529,//10B
    Libya: 25418916028,//25B
    USA: 20953030000000//20953B
};

export const dummyLabels = {
    title: "GDP vs Country",
    xLabel: "Population"
};

export const dummyStackedAreaData = [
    [
        {
            country: "India",
            year: 2000,
            value0: 0,
            value1: 123

        },
        {
            country: "India",
            year: 2001,
            value0: 0,
            value1: 20
        },
        {
            country: "India",
            year: 2002,
            value0: 0,
            value1: 70
        },
        {
            country: "India",
            year: 2003,
            value0: 0,
            value1: 13
        }
    ],
    [
        {
            country: "USA",
            year: 2000,
            value0: 123,
            value1: 193
        },
        {
            country: "USA",
            year: 2001,
            value0: 20,
            value1: 134
        },
        {
            country: "USA",
            year: 2002,
            value0: 70,
            value1: 115
        },
        {
            country: "USA",
            year: 2003,
            value0: 13,
            value1: 122
        }
    ],
    [
        {
            country: "China",
            year: 2000,
            value0: 193,
            value1: 273
        },
        {
            country: "China",
            year: 2001,
            value0: 134,
            value1: 150
        },
        {
            country: "China",
            year: 2002,
            value0: 115,
            value1: 213
        },
        {
            country: "China",
            year: 2003,
            value0: 122,
            value1: 282
        }
    ] 
];
//desired data format
// data = [
//     {
//         country : "India",
//         info : [
//             {
//                 year: 2000,
//                 population: 200000,
//                 gpd: 12345678,
//                 militaryExpenditure: 123456
//             },
//             {
//                 year: 2001,
//                 population: 230000,
//                 gpd: 22345678,
//                 militaryExpenditure: 223456
//             }
//         ]
//     },
//     {
//         country : "USA",
//         info : [
//             {
//                 year: 2000,
//                 population: 98765,
//                 gpd: 99999999,
//                 militaryExpenditure: 999999
//             },
//             {
//                 year: 2001,
//                 population: 891289,
//                 gpd: 999999990,
//                 militaryExpenditure: 999900
//             }
//         ]
//     }
    
// ]