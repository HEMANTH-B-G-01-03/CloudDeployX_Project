import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Kubernetes() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <h1>☸ Kubernetes Dashboard</h1>
        <p>View cluster deployments and pods.</p>
      </div>
    </div>
  );
}

export default Kubernetes;