import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function DockerImages() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <h1>📦 Docker Images</h1>
        <p>Manage Docker images.</p>
      </div>
    </div>
  );
}

export default DockerImages;