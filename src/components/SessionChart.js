import React, { useState, useEffect, PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import SessionLoad from "./SessionLoad";

import '../styles/SessionChart.css'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`}kg</p>
        <p className="intro">{`${payload[1].value}`}cal</p>
      </div>
    );
  }
}
let dataToDisplay = [];
await SessionLoad.getSession().then((jsonData) => {
  dataToDisplay= jsonData;
})


const data = [
  {
day:"L",
nb: 5,

  
  },
  {
day:"M",
nb: 5,


  },
  {
   day:"M", 
   nb: 3,


  },
  {
    day:"J", 
    nb: 5,

  },
  {
    day:"V", 
    nb: 6,
  

  },
  {
    day:"S", 
    nb: 4,

  },
  {
    day:"D", 
    nb: 3,


  },
];


export default class ActivityChart extends PureComponent {

  render() {
    return (
      <>
      {data ? <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={100}
          data={dataToDisplay}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="nb" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer> : "Error loading Data"  }
      </>
    );
  }
}
