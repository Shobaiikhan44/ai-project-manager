import { Grid, GridItem } from "@chakra-ui/react";
import CreateProject from "../components/CreateProject";
import Dashboard from "../components/Dashboard";

const ProjectsPage = () => {
  return (
    <Grid templateColumns={{ xs: "1fr", lg: "repeat(2, 1fr)" }} gap={0}>
      <GridItem>
        <CreateProject />
      </GridItem>
      <GridItem>
        <Dashboard />
      </GridItem>
    </Grid>
  );
};

export default ProjectsPage;
