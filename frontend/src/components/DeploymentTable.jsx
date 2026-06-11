// function DeploymentTable() {
//   return (
//     <div className="card p-4">
//       <h4>📋 Deployment History</h4>

//       <table className="table table-dark table-hover mt-3">
//         <thead>
//           <tr>
//             <th>Application</th>
//             <th>Docker Image</th>
//             <th>Replicas</th>
//             <th>Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td>Employee Portal</td>
//             <td>employee:v1</td>
//             <td>2</td>
//             <td>🟢 Running</td>
//           </tr>

//           <tr>
//             <td>E-Commerce</td>
//             <td>shop:v2</td>
//             <td>3</td>
//             <td>🟢 Running</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default DeploymentTable;
import React, { useEffect, useState } from "react";
import API from "../services/api";

function DeploymentTable() {
  const [deployments, setDeployments] = useState([]);

  useEffect(() => {
    fetchDeployments();
  }, []);

  const fetchDeployments = async () => {
    try {
      const response = await API.get("/deployments");
      setDeployments(response.data);
    } catch (error) {
      console.error("Error fetching deployments:", error);
    }
  };

  const updateDeployment = async (id, currentReplicas) => {
    const newReplicas = prompt(
      "Enter new replica count:",
      currentReplicas
    );

    if (!newReplicas) return;

    try {
      await API.put(`/deploy/${id}`, {
        replicas: Number(newReplicas),
      });

      alert("Deployment Updated Successfully 🚀");

      fetchDeployments();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update deployment");
    }
  };

  const deleteDeployment = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this deployment?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/deploy/${id}`);

      alert("Deployment Deleted Successfully 🚀");

      fetchDeployments();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete deployment");
    }
  };

  return (
    <div className="card p-4">
      <h4>📋 Deployment History</h4>

      <table className="table table-dark table-hover mt-3">
        <thead>
          <tr>
            <th>Application</th>
            <th>Docker Image</th>
            <th>Replicas</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {deployments.map((deployment) => (
            <tr key={deployment._id}>
              <td>{deployment.appName}</td>

              <td>{deployment.dockerImage}</td>

              <td>{deployment.replicas}</td>

              <td>🟢 {deployment.status}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() =>
                    updateDeployment(
                      deployment._id,
                      deployment.replicas
                    )
                  }
                >
                  Update
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    deleteDeployment(deployment._id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeploymentTable;