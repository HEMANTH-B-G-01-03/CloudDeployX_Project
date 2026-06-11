// function DeploymentTimeline() {
//   return (
//     <div className="card p-4">
//       <h4>📈 Deployment Timeline</h4>

//       <ul className="timeline">
//         <li>✓ Deployment Started</li>
//         <li>✓ Docker Image Built</li>
//         <li>✓ Kubernetes Deployment Created</li>
//         <li>✓ Service Exposed</li>
//         <li>✓ Running Successfully</li>
//       </ul>
//     </div>
//   );
// }

// export default DeploymentTimeline;


import React from "react";

function DeploymentTimeline() {
  return (
    <div className="card p-4">
      <h4>📈 Deployment Lifecycle</h4>

      <ul className="timeline">
        <li>✓ Deployment Request Received</li>
        <li>✓ Docker Image Verified</li>
        <li>✓ Deployment Created</li>
        <li>✓ Replicas Allocated</li>
        <li>✓ Application Running</li>
      </ul>
    </div>
  );
}

export default DeploymentTimeline;