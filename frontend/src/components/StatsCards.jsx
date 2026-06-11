// function StatsCards() {
//   return (
//     <div className="row">
//       <div className="col-md-3">
//         <div className="card stat-card">
//           <h5>Deployments</h5>
//           <h2>12</h2>
//         </div>
//       </div>

//       <div className="col-md-3">
//         <div className="card stat-card">
//           <h5>Running Pods</h5>
//           <h2>18</h2>
//         </div>
//       </div>

//       <div className="col-md-3">
//         <div className="card stat-card">
//           <h5>Containers</h5>
//           <h2>8</h2>
//         </div>
//       </div>

//       <div className="col-md-3">
//         <div className="card stat-card">
//           <h5>Cluster Health</h5>
//           <h2>98%</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StatsCards;


import React, { useEffect, useState } from "react";
import API from "../services/api";

function StatsCards() {
  const [deployments, setDeployments] = useState([]);

  useEffect(() => {
    fetchDeployments();
  }, []);

  const fetchDeployments = async () => {
    try {
      const response = await API.get("/deployments");
      setDeployments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const totalDeployments = deployments.length;

  const totalReplicas = deployments.reduce(
    (sum, deployment) => sum + Number(deployment.replicas || 0),
    0
  );

  const runningDeployments = deployments.filter(
    (deployment) => deployment.status === "Running"
  ).length;

  return (
    <div className="row">
      <div className="col-md-3">
        <div className="card stat-card p-3">
          <h5>Total Deployments</h5>
          <h2>{totalDeployments}</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card stat-card p-3">
          <h5>Running Apps</h5>
          <h2>{runningDeployments}</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card stat-card p-3">
          <h5>Total Replicas</h5>
          <h2>{totalReplicas}</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card stat-card p-3">
          <h5>Cluster Health</h5>
          <h2>100%</h2>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;
