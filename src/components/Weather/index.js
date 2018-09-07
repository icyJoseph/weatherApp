import React from "react";
import { FlexSection } from "../Styled/FlexSection";
import { SvgContainer } from "../Styled/SvgContainer";

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
        width: "125%"
      }}
    >
      <SvgContainer width="100px" height="100px" viewBox="0 0 300 300">
        {Component ? <Component /> : null}
      </SvgContainer>
    </FlexSection>
  );
};
