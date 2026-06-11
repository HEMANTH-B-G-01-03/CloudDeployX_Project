import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>☁ CloudDeployX</h3>

      <ul>
        <li><Link to="/">📊 Dashboard</Link></li>
        <li><Link to="/deployments">🚀 Deployments</Link></li>
        <li><Link to="/docker-images">📦 Docker Images</Link></li>
        <li><Link to="/kubernetes">☸ Kubernetes</Link></li>
        <li><Link to="/monitoring">📈 Monitoring</Link></li>
        <li><Link to="/settings">⚙ Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;