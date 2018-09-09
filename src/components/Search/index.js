import React from "react";
import { Button, Form, Input } from "../Styled";

import { SearchField } from "../../constants";

export const Search = ({ search, handleSubmit, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder={SearchField.PLACEHOLDER}
        value={search}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>{SearchField.BUTTON}</Button>
    </Form>
  );
};
