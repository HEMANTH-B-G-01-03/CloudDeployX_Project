import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Settings() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <h1>⚙ Settings</h1>
        <p>Manage application settings.</p>
      </div>
    </div>
  );
}

export default Settings;