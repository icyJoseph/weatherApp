import React from "react";
import { FlexSection, SvgContainer } from "../Styled";

import { Moon } from "../../logos/moon";
import { Sun } from "../../logos/sun";
import { Snowflake } from "../../logos/snowflake";
import { Cloudy } from "../../logos/cloudy";
import { Lightning } from "../../logos/lightning";
import { Rainy } from "../../logos/rainy";
import { WindyDay } from "../../logos/windyDay";

const selector = icon => {
  switch (icon) {
    case "clear-day":
      return Sun;
    case "clear-night":
      return Moon;
    case "wind":
      return WindyDay;
    case "fog":
    case "cloudy":
    case "partly-cloudy-day":
    case "partly-cloudy-night":
      return Cloudy;
    case "rain":
      return Rainy;
    case "snow":
    case "sleet":
      return Snowflake;
    case "thunderstorm":
      return Lightning;
    default:
      return Sun;
  }
};

export const Weather = ({ currently: { icon = "" } }) => {
  const Component = selector(icon);

  return (
    <FlexSection
      flex={3}
      style={{
        background: "#fc6363",
        borderRadius: "50% 50% 40px 40px",
        width: "96%",
        padding: "2%"
      }}
    >
      <SvgContainer width="100px" height="100px" viewBox="0 0 300 300">
        {Component ? <Component /> : null}
      </SvgContainer>
    </FlexSection>
  );
};
