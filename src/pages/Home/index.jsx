
import React from 'react'
import { useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import HeaderDashboard from "../../components/HeaderDashboard"
import KeysDashboard from "../../components/KeysDashboard"

import ActivityChart from "../../components/ActivityChart"
import SessionChart from "../../components/SessionChart"
import PerformanceChart from "../../components/PerformanceChart"
import ScoreChart from "../../components/ScoreChart"


function Home() {
      
      
      // GET ID User
   const { id } = useParams()

  const navigate = useNavigate()



    return (
      <div className="container-data">


      <HeaderDashboard user={{ id: id }}/>
      <div className="container-data-charts">
      <div className="container-data-charts-zone-charts">
      <div className="container-data-charts-zone-charts-group">
      <ActivityChart user={{ id: id }}/>
      </div>
      <div className="container-data-charts-zone-charts-group">
      <div className="container-data-charts-zone-charts-group-element">
<SessionChart/>
</div>
      <div className="container-data-charts-zone-charts-group-element">
<PerformanceChart/>
</div>
      <div className="container-data-charts-zone-charts-group-element">
<ScoreChart/>
</div>

</div>

    
      </div>
      <div className="container-data-charts-zone-keys">
<KeysDashboard user={{ id: id }}/>
</div>



      </div>


      </div>
    )
  }
  
  export default Home
  