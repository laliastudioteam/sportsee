import React, { useState, useEffect, PureComponent } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import ActivityLoad from "./ActivityLoad";

import '../styles/ActivityChart.css'


// Customization du Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activityChart-custom-tooltip">
        <p className="label">{`${payload[0].value}`} kilogram</p>
        <p className="intro">{`${payload[1].value}`} calories</p>
      </div>
    );
  }
}


class ActivityChart extends PureComponent {

constructor(props){
  super(props);

this.state = {
dataToDisplay:[],
loading:true,
error:null,
parametres:props

}
}

componentDidMount() {
  
  ActivityLoad.getActivity(this.props.user.id, this.props.data.fake).then((data) => {
    this.setState({dataToDisplay : data, loading: false });
})
.catch((error) => {
    console.error('Erreur de récupération des données:', error);
    this.setState({ error: error, loading: false });
});

}

  render() {

    const { dataToDisplay, loading, error } = this.state;

    if (loading) {
      return <p>Chargement des données</p>;
    }

    if (error) {
      return <p>Erreur : {error.message}</p>;
    }


    return (
      
      <div className="activityChart-container">
                  <div className='activityChart-title'>Score</div> 
         {dataToDisplay ? 
      <ResponsiveContainer width="100%" height="100%">
        {/* <div className='activtyChart-title'>Activité quotidienne</div> */}
        <BarChart
          width={50}
          height={1000}
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
          <YAxis orientation="right"/>
          <Tooltip content={<CustomTooltip />} />
          <Legend  verticalAlign="top" align="right" />
          <Bar dataKey="kg" fill="#000000" barSize={10} radius={[10, 10, 0, 0]} activeBar={<Rectangle fill="#000" stroke="noire" />} />
          <Bar dataKey="cal" fill="#FF0000" barSize={10} radius={[10, 10, 0, 0]} activeBar={<Rectangle fill="#f00" stroke="rouge" />} />
        </BarChart>
      </ResponsiveContainer> : null}
      </div>
    );
  }

}

export default ActivityChart;