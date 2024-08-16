import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import ScoreLoad from "./ScoreLoad";

import '../styles/ScoreChart.css'

const data = [
  {
    name: 'score',
    uv: 92,
    pv: 2400,
    fill: '#F00',
  },
];


export default class ScoreChart extends PureComponent {

  constructor(props){
    super(props);
  
  this.state = {
  dataToDisplay:[],
  loading:true,
  error:null
  
  }
  }
  
  componentDidMount() {

    const id=this.props.user.id;
    const fake=this.props.data.fake;
    ScoreLoad.getScore({id, fake}).then((data) => {
      this.setState({dataToDisplay : data, loading: false });
  })
  .catch((error) => {
      console.error('Erreur de récupération des données:', error);
      this.setState({ error: error, loading: false });
  });
  
  }

  render() {

    const { dataToDisplay, loading, error } = this.state;
console.log(dataToDisplay*100);
    if (loading) {
      return <p>Chargement des données</p>;
    }

    if (error) {
      return <p>Erreur : {error.message}</p>;
    }

    const renderLabel = ({ cx, cy, value }) => {
      return (
     <text
          x={cx}
          y={cy}
          fill="#000"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: '26px', fontWeight: 'bold'}}
        >
          {`${value}%`}
        </text>
      );
    };

    return (
      <div className="scoreChart-container">

<div className='scoreChart-title'>Score</div> 
<div className='scoreChart-subtitle'><div className='scoreChart-subtitle-text'>de votre objectif</div></div> 

      {dataToDisplay ? <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
        cx="50%"  // Position horizontale du centre du graphique
        cy="50%"  // Position verticale du centre du graphique
        innerRadius="90%"  // Rayon intérieur
        outerRadius="100%"  // Rayon extérieur
        barSize={10}  // Épaisseur de la barre
        data={dataToDisplay * 100}  // Les données avec la seule barre
        startAngle={90}  // Angle de départ pour la barre
        endAngle={450}  // Angle de fin pour la barre (360 + 90)
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false}/>
        <RadialBar
          minAngle={15}
          clockWise
          dataKey="uv"
          cornerRadius={5}  // Rayon pour arrondir les bouts des barres
          label={renderLabel}
        />
      </RadialBarChart>
      </ResponsiveContainer> : "Error loading Data" }
      </div>
    );
  }
}
