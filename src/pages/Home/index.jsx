import HeaderDashboard from "../../components/HeaderDashboard"
import KeysDashboard from "../../components/KeysDashboard"
import ActivityChart from "../../components/ActivityChart"
import SessionChart from "../../components/SessionChart"
import IntensityChart from "../../components/IntensityChart"
import ScoreChart from "../../components/ScoreChart"

function Home() {
    return (
      <div className="container-data">


      <HeaderDashboard/>
      <div className="container-data-charts">
      <div className="container-data-charts-zone-charts">
      <div className="container-data-charts-zone-charts-group">

      <ActivityChart/>
      </div>
      <div className="container-data-charts-zone-charts-group">
      <div className="container-data-charts-zone-charts-group-element">
<SessionChart/>
</div>
      <div className="container-data-charts-zone-charts-group-element">
<IntensityChart/>
</div>
      <div className="container-data-charts-zone-charts-group-element">
<ScoreChart/>
</div>

</div>

    
      </div>
      <div className="container-data-charts-zone-keys">
<KeysDashboard/>
</div>



      </div>


      </div>
    )
  }
  
  export default Home
  