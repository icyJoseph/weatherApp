import React from "react";
import { FlexSection } from "../Styled/FlexSection";

// temp comes in Celisus

export const Temperature = ({ celsius = 0, maxTemp = 0, minTemp = 0 }) => {
  return (
    <span style={{ fontSize: 48 }}>
      {celsius.toFixed(2)}
      <span>&deg;C</span>
    </span>
  );
};
