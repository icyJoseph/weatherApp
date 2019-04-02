import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic } from "@fortawesome/free-solid-svg-icons";

export const Magic = ({ callback = () => {} }) => (
  <div onClick={callback}>
    <FontAwesomeIcon icon={faMagic} />
  </div>
);
