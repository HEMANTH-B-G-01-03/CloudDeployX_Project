import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../services/api";
import "../styles/dashboard.css";

function Settings() {

    const [settings, setSettings] = useState({});

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {

        try {

            const res = await API.get("/settings");

            setSettings(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="dashboard-container">

            <Sidebar />

            <div className="main-content">

                <h1>⚙ Settings Dashboard</h1>

                <p>Manage your CloudDeployX application.</p>

                <button
                    className="refresh-btn"
                    onClick={loadSettings}
                >
                    🔄 Refresh
                </button>

                <div className="settings-grid">

                    <div className="setting-card">

                        <h3>☁ Application</h3>

                        <h2>{settings.application}</h2>

                        <p>Version {settings.version}</p>

                    </div>

                    <div className="setting-card">

                        <h3>🐳 Docker</h3>

                        <h2>{settings.docker}</h2>

                    </div>

                    <div className="setting-card">

                        <h3>☸ Kubernetes</h3>

                        <h2>{settings.kubernetes}</h2>

                    </div>

                    <div className="setting-card">

                        <h3>💾 MongoDB</h3>

                        <h2>{settings.database}</h2>

                    </div>

                    <div className="setting-card">

                        <h3>⚙ Backend</h3>

                        <h2>{settings.backend}</h2>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Settings;