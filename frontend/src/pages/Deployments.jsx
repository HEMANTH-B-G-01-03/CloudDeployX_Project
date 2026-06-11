// import React, { useEffect, useState } from "react";
// import API from "../services/api";
// import DeploymentForm from "../components/DeploymentForm";
// import { useState, useEffect } from "react";
// import API from "../services/api";

// function Deployments() {
//   const [deployments, setDeployments] = useState([]);
//   const [appName, setAppName] = useState("");
// const [dockerImage, setDockerImage] = useState("");
// const [replicas, setReplicas] = useState("");
// const [deployments, setDeployments] = useState([]);

//   const fetchDeployments = async () => {
//     try {
//       const response = await API.get("/deployments");
//       setDeployments(response.data);
//     } catch (error) {
//       console.error("Error fetching deployments:", error);
//     }
//   };

//   useEffect(() => {
//     fetchDeployments();
//   }, []);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         padding: "30px",
//         backgroundColor: "#0f172a",
//         color: "white",
//       }}
//     >
//       <h1>☁️ CloudDeployX Deployments</h1>

//       <div
//         style={{
//           background: "#1e293b",
//           padding: "20px",
//           borderRadius: "10px",
//           marginBottom: "30px",
//         }}
//       >
//         <h2>Create Deployment</h2>

//         <DeploymentForm
//           onDeploymentCreated={fetchDeployments}
//         />
//       </div>

//       <h2>Deployment List</h2>

//       {deployments.length === 0 ? (
//         <p>No deployments found.</p>
//       ) : (
//         deployments.map((deployment) => (
//           <div
//             key={deployment._id}
//             style={{
//               background: "#1e293b",
//               padding: "20px",
//               marginBottom: "15px",
//               borderRadius: "10px",
//               border: "1px solid #334155",
//             }}
//           >
//             <h3>{deployment.appName}</h3>

//             <p>
//               <strong>Docker Image:</strong>{" "}
//               {deployment.dockerImage}
//             </p>

//             <p>
//               <strong>Replicas:</strong>{" "}
//               {deployment.replicas}
//             </p>

//             <p>
//               <strong>Status:</strong>{" "}
//               {deployment.status}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Deployments;

import React, { useEffect, useState } from "react";
import API from "../services/api";
import DeploymentForm from "../components/DeploymentForm";

function Deployments() {
  const [deployments, setDeployments] = useState([]);

  const fetchDeployments = async () => {
    try {
      const response = await API.get("/deployments");
      setDeployments(response.data);
    } catch (error) {
      console.error("Error fetching deployments:", error);
    }
  };

  useEffect(() => {
    fetchDeployments();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <h1>☁️ CloudDeployX Deployments</h1>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      >
        <h2>🚀 Create Deployment</h2>

        <DeploymentForm
          onDeploymentCreated={fetchDeployments}
        />
      </div>

      <h2>📦 Deployment List</h2>

      {deployments.length === 0 ? (
        <p>No deployments found.</p>
      ) : (
        deployments.map((deployment) => (
          <div
            key={deployment._id}
            style={{
              background: "#1e293b",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid #334155",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <h3>{deployment.appName}</h3>

            <p>
              <strong>Docker Image:</strong>{" "}
              {deployment.dockerImage}
            </p>

            <p>
              <strong>Replicas:</strong>{" "}
              {deployment.replicas}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color:
                    deployment.status === "Running"
                      ? "#22c55e"
                      : "#ef4444",
                  fontWeight: "bold",
                }}
              >
                {deployment.status}
              </span>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Deployments;