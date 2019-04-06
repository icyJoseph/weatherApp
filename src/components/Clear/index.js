import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import { ButtonWrap } from "../Styled";

export const Clear = ({ callback = () => {} }) => (
  <ButtonWrap onClick={callback}>
    <FontAwesomeIcon icon={faEraser} />
  </ButtonWrap>
);
