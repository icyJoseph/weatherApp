import React from "react";
import { FlexSection } from "../Styled/FlexSection";

// temp comes in Celisus

export const Temperature = ({ celsius = 0, maxTemp = 0, minTemp = 0 }) => {
  return (
    <FlexSection flex={3} direction="row">
      <FlexSection flex={3} style={{ fontSize: 48 }}>
        <span>
          {celsius.toFixed(2)}
          <span>&deg;C</span>
        </span>
      </FlexSection>
      <FlexSection flex={3} direction="column" style={{ marginLeft: "10px" }}>
        <FlexSection justifyContent="flex-end" alignItems="flex-end">
          <span>
            Max: {maxTemp.toFixed(2)}
            <span>&deg;C</span>
          </span>
        </FlexSection>
        <FlexSection justifyContent="flex-end" alignItems="flex-end">
          <span>
            Min: {minTemp.toFixed(2)}
            <span>&deg;C</span>
          </span>
        </FlexSection>
      </FlexSection>
    </FlexSection>
  );
};
