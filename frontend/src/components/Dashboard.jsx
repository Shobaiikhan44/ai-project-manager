import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Heading, Table } from "@chakra-ui/react";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const token = localStorage.getItem("accessToken");
  //       const response = await axios.get(
  //         "http://localhost:8000/api/projects/",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       setProjects(response.data);
  //     } catch (err) {
  //       console.error(err);
  //       setError("Failed to fetch projects. Please login again.");
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  return (
    <Container marginY={5} spaceY={3}>
      <Heading as="h2">Dashboard</Heading>
      <Table.Root variant="outline">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Title</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
            <Table.ColumnHeader>Deadline</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Project 1</Table.Cell>
            <Table.Cell>$120</Table.Cell>
            <Table.Cell>20/12/2024</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Project 2</Table.Cell>
            <Table.Cell>$10</Table.Cell>
            <Table.Cell>10/12/2025</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Container>
    // <Container maxWidth="md" sx={{ mt: 4 }}>
    //   <Paper elevation={3} sx={{ p: 4 }}>
    //     <Typography variant="h4" gutterBottom>
    //       My Projects
    //     </Typography>

    //     {error && <Alert severity="error">{error}</Alert>}

    //     {projects.length === 0 ? (
    //       <Typography variant="body1" sx={{ mt: 2 }}>
    //         No projects found.
    //       </Typography>
    //     ) : (
    //       <List>
    //         {projects.map((project, index) => (
    //           <Box key={project.id}>
    //             <ListItem alignItems="flex-start">
    //               <ListItemText
    //                 primary={
    //                   <Typography variant="h6">{project.title}</Typography>
    //                 }
    //                 secondary={
    //                   <>
    //                     <Typography variant="body2" color="text.secondary">
    //                       Status: {project.status}
    //                     </Typography>
    //                     <Typography variant="body2" color="text.secondary">
    //                       Deadline: {project.deadline}
    //                     </Typography>
    //                   </>
    //                 }
    //               />
    //             </ListItem>
    //             {index !== projects.length - 1 && <Divider />}
    //           </Box>
    //         ))}
    //       </List>
    //     )}
    //   </Paper>
    // </Container>
  );
};

export default Dashboard;
