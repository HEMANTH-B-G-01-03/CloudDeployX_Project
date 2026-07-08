import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../services/api";
import "../styles/dashboard.css";

function DockerImages() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const res = await API.get("/docker-images");
            setImages(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="dashboard-container">

            <Sidebar />

            <div className="main-content">

                <h1>📦 Docker Images</h1>

                {/* <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        marginTop: "30px"
                    }}
                >

                    <thead>

                        <tr
                            style={{
                                background: "#1e293b",
                                color: "white"
                            }}
                        >
                            <th>Repository</th>
                            <th>Tag</th>
                            <th>Image ID</th>
                            <th>Size</th>
                        </tr>

                    </thead>

                    <tbody>

                        {images.map((img) => (

                            <tr
                                key={img.image_id}
                                style={{
                                    background: "#0f172a",
                                    color: "white",
                                    borderBottom: "1px solid #334155"
                                }}
                            >

                                <td>{img.repository}</td>
                                <td>{img.tag}</td>
                                <td>{img.image_id}</td>
                                <td>{img.size}</td>

                            </tr>

                        ))}

                    </tbody>

                </table> */}


                <div
    style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "25px",
        marginTop: "30px",
    }}
>
    {images.map((img) => (

        <div
            key={img.image_id}
            style={{
                background: "#1e293b",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
                transition: "0.3s",
                border: "1px solid #334155",
                cursor: "pointer"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.border = "1px solid #3b82f6";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.border = "1px solid #334155";
            }}
        >

            <h2
                style={{
                    marginBottom: "18px",
                    color: "#60a5fa"
                }}
            >
                📦 {img.repository}
            </h2>

            <p>
                <strong>🏷 Tag</strong>
            </p>

            <span
                style={{
                    background: "#2563eb",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    display: "inline-block",
                    marginBottom: "18px"
                }}
            >
                {img.tag}
            </span>

            <p>
                <strong>🆔 Image ID</strong>
            </p>

            <code
                style={{
                    background: "#0f172a",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    display: "block",
                    marginBottom: "18px",
                    color: "#f8fafc"
                }}
            >
                {img.image_id}
            </code>

            <p>
                <strong>💾 Size</strong>
            </p>

            <span
                style={{
                    background: "#16a34a",
                    padding: "6px 14px",
                    borderRadius: "20px"
                }}
            >
                {img.size}
            </span>

            <hr
                style={{
                    margin: "20px 0",
                    borderColor: "#334155"
                }}
            />

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <span
                    style={{
                        color: "#22c55e",
                        fontWeight: "bold"
                    }}
                >
                    🟢 Available
                </span>

                <button
                    style={{
                        background: "#2563eb",
                        border: "none",
                        padding: "8px 18px",
                        color: "white",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                >
                    View
                </button>
            </div>

        </div>

    ))}
</div>

            </div>

        </div>
    );
}

export default DockerImages;