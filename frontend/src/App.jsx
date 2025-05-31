import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import CreateProject from "./components/CreateProject";
import Dashboard from "./components/Dashboard";

const App = () => {
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

export default App;
