import React from "react";
import { FlexSection } from "../Styled/FlexSection";
import { Temperature } from "./Temperature";
import { SvgContainer } from "../Styled/SvgContainer";
import { Thermometer } from "../../logos/thermometer";

import { Sun } from "../../logos/sun";
import { Snowflake } from "../../logos/snowflake";
import { Cloudy } from "../../logos/cloudy";
import { Lightning } from "../../logos/lightning";
import { Rainy } from "../../logos/rainy";

const selector = {
  Clear: Sun,
  Clouds: Cloudy,
  Rain: Rainy,
  Snow: Snowflake,
  ThunderStorm: Lightning
};

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

const City = ({ name = "" }) => (
  <FlexSection style={{ fontSize: 30, marginTop: 10 }}>
    {capitalize(name)}
  </FlexSection>
);
const Description = ({ description = "" }) => (
  <FlexSection style={{ fontSize: 30, marginTop: 10 }}>
    {capitalize(description)}
  </FlexSection>
);

const Loading = () => <div>Loading...</div>;

const K2C = temp => temp - 273;

export const Measurements = ({ measurements = {}, indicators = {} }) => {
  const { name, description, temp, max, min } = measurements;
  const [celsius, maxTemp, minTemp] = [temp, max, min].map(K2C);
  const { main } = indicators;
  const Component = selector[main];

  return measurements ? (
    <FlexSection flex={1} direction="column">
      <FlexSection
        flex={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <City name={name} />
        <Description description={description} />
      </FlexSection>
      <FlexSection flex={3} style={{ paddingTop: 40 }}>
        <SvgContainer width="150px" height="150px" viewBox="0 0 300 300">
          <Thermometer celsius={celsius} />
        </SvgContainer>
        <Temperature celsius={celsius} maxTemp={maxTemp} minTemp={minTemp} />
      </FlexSection>
      <FlexSection
        flex={3}
        style={{
          background: "#fc6363",
          borderRadius: "50% 50% 40px 40px",
          width: "125%"
        }}
      >
        <SvgContainer width="100px" height="100px" viewBox="0 0 300 300">
          {Component ? <Component /> : null}
        </SvgContainer>
      </FlexSection>
    </FlexSection>
  ) : (
    <Loading />
  );
};
