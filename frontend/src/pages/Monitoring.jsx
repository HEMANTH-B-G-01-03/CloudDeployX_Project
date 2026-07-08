import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../services/api";
import "../styles/dashboard.css";

function Monitoring() {

    const [data, setData] = useState({});

    const fetchMonitoring = async () => {

        try {

            const res = await API.get("/monitoring");

            setData(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        fetchMonitoring();

        const timer = setInterval(fetchMonitoring, 5000);

        return () => clearInterval(timer);

    }, []);

    const cardStyle = {
        background: "#1e293b",
        borderRadius: "15px",
        padding: "25px",
        color: "white",
        minHeight: "150px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)"
    };

    return (

        <div className="dashboard-container">

            <Sidebar />

            <div className="main-content">

                <h1>📈 Monitoring Dashboard</h1>

                <p>Live monitoring of CloudDeployX resources.</p>

                <button
                    className="btn btn-primary mt-3"
                    onClick={fetchMonitoring}
                >
                    🔄 Refresh
                </button>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                        gap: "25px",
                        marginTop: "30px"
                    }}
                >

                    <div style={cardStyle}>
                        <h3>🖥 CPU Usage</h3>
                        <h1>{data.cpu}%</h1>
                    </div>

                    <div style={cardStyle}>
                        <h3>💾 Memory</h3>
                        <h1>{data.memory}%</h1>
                    </div>

                    <div style={cardStyle}>
                        <h3>🗄 Disk</h3>
                        <h1>{data.disk}%</h1>
                    </div>

                    <div style={cardStyle}>
                        <h3>🐳 Containers</h3>
                        <h1>{data.runningContainers}</h1>
                    </div>

                    <div style={cardStyle}>
                        <h3>🍃 MongoDB</h3>
                        <h2>{data.mongodb}</h2>
                    </div>

                    <div style={cardStyle}>
                        <h3>⚙ Backend</h3>
                        <h2>{data.backend}</h2>
                    </div>

                    <div style={cardStyle}>
                        <h3>⏳ System Uptime</h3>
                        <h2>{data.uptime} hrs</h2>
                    </div>

                </div>

            </div>

        </div>

    );

}

export default Monitoring;