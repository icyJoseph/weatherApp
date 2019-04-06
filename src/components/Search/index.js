import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ButtonWrap, Form, Input } from "../Styled";
import { SearchField } from "../../constants";

export const Search = ({ query, handleSubmit, handleChange, disabled }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder={SearchField.PLACEHOLDER}
        value={query}
        onChange={handleChange}
        disabled={disabled}
      />
      <ButtonWrap onClick={handleSubmit} noGutters>
        <FontAwesomeIcon icon={faSearch} />
      </ButtonWrap>
    </Form>
  );
};
