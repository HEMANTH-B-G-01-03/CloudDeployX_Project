function DeploymentTable() {
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
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Employee Portal</td>
            <td>employee:v1</td>
            <td>2</td>
            <td>🟢 Running</td>
          </tr>

          <tr>
            <td>E-Commerce</td>
            <td>shop:v2</td>
            <td>3</td>
            <td>🟢 Running</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DeploymentTable;