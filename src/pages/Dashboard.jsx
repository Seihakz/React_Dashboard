import Dashboardcard from "../components/Dashboardcard"
import Chart from "../components/Chart"

function Dashboard() {
  return (
    <div>
        <h2 className="mb-4 text-xl md:text-2xl font-serif">Dashboard</h2>
        <Dashboardcard/>
      
      <div className="">
        <Chart/>
      </div>
      
      

    </div>
  )
}

export default Dashboard
