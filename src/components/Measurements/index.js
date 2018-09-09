import React from "react";
import { FlexSection, SvgContainer } from "../Styled";
import { Thermometer } from "../../logos/thermometer";

export const Measurements = ({ currently = {}, daily: { data = [] } }) => {
  const { temperature } = currently;

  const [{ temperatureHigh, temperatureLow }] = data;
  const [celsius, maxTemp, minTemp] = [
    temperature,
    temperatureHigh,
    temperatureLow
  ];

  return (
    <FlexSection flex={3} style={{ paddingTop: 40, margin: "auto 20px" }}>
      <SvgContainer width="100px" height="100px" viewBox="0 0 300 300">
        <Thermometer celsius={celsius} />
      </SvgContainer>
      <FlexSection direction="column">
        <span style={{ fontSize: 48 }}>
          {celsius.toFixed(2)}
          <span>&deg;C</span>
        </span>
        <span style={{ fontSize: 16 }}>
          min: {minTemp.toFixed(0)}
          <span>&deg;C</span>
          {" - "}
          max: {maxTemp.toFixed(0)}
          <span>&deg;C</span>
        </span>
      </FlexSection>
    </FlexSection>
  );
};
