import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../services/api";
import "../styles/dashboard.css";

function Kubernetes() {

  const [pods, setPods] = useState("");
  const [deployments, setDeployments] = useState("");
  const [services, setServices] = useState("");
  const [nodes, setNodes] = useState("");

  useEffect(() => {
    loadCluster();
  }, []);

  const loadCluster = async () => {
    try {

      const podsRes = await API.get("/kubernetes/pods");
      const deployRes = await API.get("/kubernetes/deployments");
      const serviceRes = await API.get("/kubernetes/services");
      const nodeRes = await API.get("/kubernetes/nodes");

      setPods(podsRes.data);
      setDeployments(deployRes.data);
      setServices(serviceRes.data);
      setNodes(nodeRes.data);

    } catch (err) {
      console.error("Error loading Kubernetes data:", err);
    }
  };

  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="main-content">

        <h1>☸ Kubernetes Dashboard</h1>

        <p style={{ marginBottom: "20px" }}>
          View cluster deployments, pods, services and nodes.
        </p>

        <button
          onClick={loadCluster}
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "25px"
          }}
        >
          🔄 Refresh Cluster
        </button>

        <div className="stats-grid">

          <div className="stat-card">
            <h2>📦 Pods</h2>
            <pre>{pods}</pre>
          </div>

          <div className="stat-card">
            <h2>🚀 Deployments</h2>
            <pre>{deployments}</pre>
          </div>

          <div className="stat-card">
            <h2>🌐 Services</h2>
            <pre>{services}</pre>
          </div>

          <div className="stat-card">
            <h2>🖥 Nodes</h2>
            <pre>{nodes}</pre>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Kubernetes;