import {
  Button,
  Field,
  Flex,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

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

    console.log(formData);
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
    <form onSubmit={handleSubmit}>
      <Flex direction="column" maxWidth="50%" gap={5} marginY={10}>
        <Heading as="h2">Create New Project</Heading>
        <Stack gap={5}>
          <Field.Root required>
            <Field.Label>
              Project Title
              <Field.RequiredIndicator />
            </Field.Label>
            <Input name="title" type="text" onChange={handleChange} />
          </Field.Root>
          <Field.Root required>
            <Field.Label>
              Project Description
              <Field.RequiredIndicator />
            </Field.Label>
            <Textarea rows={5} onChange={handleChange} name="description" />
          </Field.Root>
          <Stack direction="row" gap={5}>
            <Field.Root required>
              <Field.Label>
                Project Price
                <Field.RequiredIndicator />
              </Field.Label>
              <Input name="price" type="number" onChange={handleChange} />
            </Field.Root>
            <Field.Root required>
              <Field.Label>
                Project Deadline
                <Field.RequiredIndicator />
              </Field.Label>
              <Input type="date" onChange={handleChange} name="deadline" />
            </Field.Root>
          </Stack>
          <Button type="submit" width="fit-content" paddingX={5}>
            Create Project
          </Button>
        </Stack>
      </Flex>
    </form>
  );
};

export default CreateProject;
