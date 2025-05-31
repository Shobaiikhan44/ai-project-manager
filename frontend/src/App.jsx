import { Container } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token === null) navigate("/login");
  }, [navigate]);

  return (
    <Container maxWidth={1280}>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default App;
