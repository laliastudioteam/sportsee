import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import PerformanceLoad from "./PerformanceLoad";

class PerformanceChart extends PureComponent {

  constructor(props){
    super(props);
  
  this.state = {
  dataToDisplay:[],
  loading:true,
  error:null
  
  }
  }
  
  componentDidMount() {

    PerformanceLoad.getPerformance(this.props.user.id, this.props.data.fake).then((data) => {
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
      {dataToDisplay ? <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataToDisplay} fill="#00a0fc" >
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="nb" />
        </RadarChart>
      </ResponsiveContainer> : null }
      </>
    );
  }
}

export default PerformanceChart;