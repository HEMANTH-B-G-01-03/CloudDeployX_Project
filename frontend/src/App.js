import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Deployments from "./pages/Deployments";
import DockerImages from "./pages/DockerImages";
import Kubernetes from "./pages/Kubernetes";
import Monitoring from "./pages/Monitoring";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/deployments" element={<Deployments />} />
        <Route path="/docker-images" element={<DockerImages />} />
        <Route path="/kubernetes" element={<Kubernetes />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;