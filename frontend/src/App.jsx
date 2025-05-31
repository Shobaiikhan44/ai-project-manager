import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { Container } from "@chakra-ui/react";

const App = () => {
  return (
    <Container maxWidth={1280}>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default App;
