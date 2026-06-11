import React, { useState } from "react";
import API from "../services/api";

function DeploymentForm({ onDeploymentCreated }) {
  const [appName, setAppName] = useState("");
  const [dockerImage, setDockerImage] = useState("");
  const [replicas, setReplicas] = useState("");

  const handleSubmit = async () => {
    try {
      await API.post("/deploy", {
        appName,
        dockerImage,
        replicas: Number(replicas),
      });

      setAppName("");
      setDockerImage("");
      setReplicas("");

      if (onDeploymentCreated) {
        onDeploymentCreated();
      }

      alert("Deployment Created Successfully 🚀");
    } catch (error) {
      console.error(error);
      alert("Failed to create deployment");
    }
  };

  return (
    <div>
      <h3>🚀 Deploy Application</h3>

      <input
        type="text"
        placeholder="Application Name"
        value={appName}
        onChange={(e) => setAppName(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "5px",
        }}
      />

      <input
        type="text"
        placeholder="Docker Image"
        value={dockerImage}
        onChange={(e) => setDockerImage(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "5px",
        }}
      />

      <input
        type="number"
        placeholder="Replicas"
        value={replicas}
        onChange={(e) => setReplicas(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "5px",
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Deploy Application
      </button>
    </div>
  );
}

export default DeploymentForm;