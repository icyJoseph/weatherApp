import React from "react";
import { Button, Form, Input } from "../Styled";

export const Search = ({ search, handleSubmit, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Go!</Button>
    </Form>
  );
};
