import React from "react";
import { Sun } from "../../logos/sun";
import { FlexSection } from "../Styled/FlexSection";

export const Weather = ({ indicators }) => {
  console.log(indicators);
  return (
    <FlexSection
      flex={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <svg width="100" height="100" viewBox="0 0 300 300">
        <Sun />
      </svg>
    </FlexSection>
  );
};
