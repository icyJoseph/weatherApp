import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { ButtonWrap } from "../Styled";

export const Refresh = ({ callback = () => {} }) => (
  <ButtonWrap onClick={callback}>
    <FontAwesomeIcon icon={faSync} />
  </ButtonWrap>
);
