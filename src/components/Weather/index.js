import React from "react";
import { FlexSection, SvgContainer } from "../Styled";

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

export const Weather = ({ indicators = {} }) => {
  const { main } = indicators;
  const Component = selector[main];

  return (
    <FlexSection
      flex={3}
      style={{
        background: "#fc6363",
        borderRadius: "50% 50% 40px 40px",
        width: "100%"
      }}
    >
      <SvgContainer width="100px" height="100px" viewBox="0 0 300 300">
        {Component ? <Component /> : null}
      </SvgContainer>
    </FlexSection>
  );
};
