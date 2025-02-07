import Dashboardcard from "../components/Dashboardcard"
import Chart from "../components/Chart"

function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <Dashboardcard/>
      
      <div>
        <h2>Recent Revenue</h2>
        <Chart/>
      </div>
      
      <div>
        <h2>Latest Invoice</h2>
        
      </div>

    </div>
  )
}

export default Dashboard
