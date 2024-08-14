import React, { useState, useEffect, PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import SessionLoad from "./SessionLoad";

import '../styles/SessionChart.css'



class SessionChart extends PureComponent {

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
    
    SessionLoad.getSession(this.props.user.id, this.props.data.fake).then((data) => {
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

      <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={dataToDisplay}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
   
          <Line type="monotone" dataKey="nb" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    
      </>
    );
  }
}

export default SessionChart;