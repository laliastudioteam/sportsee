import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import PerformanceLoad from "./PerformanceLoad";

const data = [
  {
    subject: 'Endurance',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Energie',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Intensite',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Vitesse',
    A: 99,
    B: 100,
    fullMark: 150,
  },
 
];

let dataToDisplayPerformance = [];
await PerformanceLoad.getPerformance().then((jsonData) => {
  dataToDisplayPerformance= jsonData;
 console.log(dataToDisplayPerformance);
})

class PerformanceChart extends PureComponent {
  
  render() {
    return (
      <>
      {dataToDisplayPerformance ? <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataToDisplayPerformance} fill="#00a0fc" >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" />
        </RadarChart>
      </ResponsiveContainer> : null }
      </>
    );
  }
}

export default PerformanceChart;