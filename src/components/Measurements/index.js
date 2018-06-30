import React from "react";
import { FlexSection } from "../Styled/FlexSection";

export const Measurements = ({ measurements }) => {
  return (
    <FlexSection
      flex={3}
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      {measurements ? <div>Measurements</div> : <div>Loading...</div>}
    </FlexSection>
  );
};
