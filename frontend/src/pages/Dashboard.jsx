import Sidebar from "../components/Sidebar";
import StatsCards from "../components/StatsCards";
import DeploymentForm from "../components/DeploymentForm";
import DeploymentTable from "../components/DeploymentTable";
import DeploymentTimeline from "../components/DeploymentTimeline";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <h2 className="mb-4">☁️ CloudDeployX Dashboard</h2>

        {/* Stats Cards */}
        <StatsCards />

        {/* Form + Timeline */}
        <div className="row mt-4">
          <div className="col-lg-6">
            <DeploymentForm />
          </div>

          <div className="col-lg-6">
            <DeploymentTimeline />
          </div>
        </div>

        {/* Deployment Table */}
        <div className="mt-4">
          <DeploymentTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;