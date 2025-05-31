import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  Divider,
  Alert,
} from "@mui/material";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          "http://localhost:8000/api/projects/",
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
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          My Projects
        </Typography>

        {error && <Alert severity="error">{error}</Alert>}

        {projects.length === 0 ? (
          <Typography variant="body1" sx={{ mt: 2 }}>
            No projects found.
          </Typography>
        ) : (
          <List>
            {projects.map((project, index) => (
              <Box key={project.id}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={
                      <Typography variant="h6">{project.title}</Typography>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary">
                          Status: {project.status}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Deadline: {project.deadline}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                {index !== projects.length - 1 && <Divider />}
              </Box>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
};

export default Dashboard;
