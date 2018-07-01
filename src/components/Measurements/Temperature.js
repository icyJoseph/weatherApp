import React from "react";
import { FlexSection } from "../Styled/FlexSection";
import { SvgContainer } from "../Styled/SvgContainer";
import { Thermometer } from "../../logos/thermometer";

// temp comes in Celisus

const K2C = temp => temp - 273;

export const Temperature = ({ temp = 0, max = 0, min = 0 }) => {
  const [celsius, maxTemp, minTemp] = [temp, max, min].map(K2C);
  return (
    <FlexSection flex={3} direction="column">
      <FlexSection flex={3} style={{ fontSize: 48 }}>
        <span>{celsius.toFixed(2)}</span>
        <span>&deg;C</span>
      </FlexSection>
      <FlexSection justifyContent="flex-start" alignItems="flex-start">
        <SvgContainer viewBox="0 0 300 300">
          <Thermometer celsius={celsius} />
        </SvgContainer>
        <FlexSection direction="column">
          <FlexSection justifyContent="flex-start" alignItems="flex-start">
            <span>Max: {maxTemp.toFixed(2)}</span>
            <span>&deg;C</span>
          </FlexSection>
          <FlexSection justifyContent="flex-start" alignItems="flex-start">
            <span>Min: {minTemp.toFixed(2)}</span>
            <span>&deg;C</span>
          </FlexSection>
        </FlexSection>
      </FlexSection>
    </FlexSection>
  );
};
