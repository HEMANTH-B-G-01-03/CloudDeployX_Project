function StatsCards() {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="card stat-card">
          <h5>Deployments</h5>
          <h2>12</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card stat-card">
          <h5>Running Pods</h5>
          <h2>18</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card stat-card">
          <h5>Containers</h5>
          <h2>8</h2>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card stat-card">
          <h5>Cluster Health</h5>
          <h2>98%</h2>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;