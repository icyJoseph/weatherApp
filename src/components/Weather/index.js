import React from "react";
import { Sun } from "../../logos/sun";
import { FlexSection } from "../Styled/FlexSection";
import { SvgContainer } from "../Styled/SvgContainer";
export const Weather = ({ indicators }) => {
  return (
    <FlexSection flex={2} alignItems="flex-end">
      <SvgContainer viewBox="0 0 300 300">
        <Sun />
      </SvgContainer>
    </FlexSection>
  );
};
