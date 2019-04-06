import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic } from "@fortawesome/free-solid-svg-icons";
import { ButtonWrap } from "../Styled";

export const Magic = ({ callback = () => {} }) => (
  <ButtonWrap onClick={callback}>
    <FontAwesomeIcon icon={faMagic} />
  </ButtonWrap>
);
