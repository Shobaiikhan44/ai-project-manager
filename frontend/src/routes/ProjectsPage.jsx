import { Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router";
import ProjectsTable from "../components/ProjectsTable";

const ProjectsPage = () => {
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
