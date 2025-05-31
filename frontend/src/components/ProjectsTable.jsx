import { Table } from "@chakra-ui/react";
import React from "react";

const ProjectsTable = () => {
  return (
    <Table.Root variant="outline" borderRadius={5}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader fontWeight={700}>Title</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight={700}>Price</Table.ColumnHeader>
          <Table.ColumnHeader fontWeight={700}>Deadline</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Project 1</Table.Cell>
          <Table.Cell>$120</Table.Cell>
          <Table.Cell>20/12/2024</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default ProjectsTable;
