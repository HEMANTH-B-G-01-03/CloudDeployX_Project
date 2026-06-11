import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Monitoring() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <h1>📈 Monitoring Dashboard</h1>
        <p>Monitor application health and logs.</p>
      </div>
    </div>
  );
}

export default Monitoring;