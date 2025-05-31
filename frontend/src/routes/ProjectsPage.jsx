import ProjectsTable from "../components/ProjectsTable";
import { Flex, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router";

const ProjectsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token === null) navigate("/login");
  }, [navigate]);

  return (
    <Flex direction="column" gap={5} marginY={10}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h2">Projects</Heading>
        <Button asChild>
          <Link to="/projects/new">Create Project</Link>
        </Button>
      </Flex>
      <ProjectsTable />
    </Flex>
  );
};

export default ProjectsPage;
