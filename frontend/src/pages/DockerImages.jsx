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

                <table
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

                </table>

            </div>

        </div>
    );
}

export default DockerImages;