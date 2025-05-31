import { useState } from "react";
import {
  Container,
  Stack,
  Field,
  Button,
  Heading,
  Input,
  Box,
} from "@chakra-ui/react";

const Login = () => {
  const username = "josefitani";
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  // const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log({ username, password });
    // try {
    //   const response = await axios.post("http://localhost:8000/api/token/", {
    //     username,
    //     password,
    //   });
    //   setToken(response.data.access);
    //   localStorage.setItem("accessToken", response.data.access);
    //   setError("");
    // } catch (error) {
    //   console.error("Login failed:", error);
    //   setError("Invalid credentials. Please try again.");
    // }
  };

  return (
    <form onSubmit={handleLogin}>
      <Container marginY={5} spaceY={3} maxWidth={480}>
        <Heading as="h2">Log in</Heading>
        <Stack gap={5}>
          <Field.Root required>
            <Field.Label>
              Username
              <Field.RequiredIndicator />
            </Field.Label>
            <Input
              name="username"
              type="text"
              defaultValue={username}
              readOnly
            />
          </Field.Root>
          <Field.Root required>
            <Field.Label>
              Password
              <Field.RequiredIndicator />
            </Field.Label>
            <Input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field.Root>
          <Button type="submit">Login</Button>
        </Stack>
      </Container>
    </form>
  );
};

export default Login;
