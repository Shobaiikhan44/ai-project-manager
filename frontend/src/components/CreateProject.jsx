import { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      await axios.post("http://localhost:8000/api/projects/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Project created successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to create project");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Create New Project
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Project Title"
            name="title"
            fullWidth
            margin="normal"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            fullWidth
            margin="normal"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <TextField
            label="Deadline"
            name="deadline"
            type="date"
            fullWidth
            margin="normal"
            value={formData.deadline}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Create Project
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateProject;
