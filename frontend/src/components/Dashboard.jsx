import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          "http://127.0.0.1:8000/api/projects/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProjects(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch projects. Please login again.");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {projects && (
        <ul>
          {projects.map((project) => (
            <li>{project.title}</li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Dashboard;
