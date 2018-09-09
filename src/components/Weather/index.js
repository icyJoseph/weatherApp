import React from "react";
import { FlexSection, SvgContainer } from "../Styled";

import { Moon } from "../../logos/moon";
import { Sun } from "../../logos/sun";
import { Snowflake } from "../../logos/snowflake";
import { Cloudy } from "../../logos/cloudy";
import { Lightning } from "../../logos/lightning";
import { Rainy } from "../../logos/rainy";
import { WindyDay } from "../../logos/windyDay";

import { Icons } from "../../constants";

const selector = icon => {
  switch (icon) {
    case Icons.CLEAR_DAY:
      return Sun;
    case Icons.CLEAR_NIGHT:
      return Moon;
    case Icons.WIND:
      return WindyDay;
    case Icons.FOG:
    case Icons.CLOUDY:
    case Icons.PARTLY_CLOUDY_DAY:
    case Icons.PARTLY_CLOUDY_NIGHT:
      return Cloudy;
    case Icons.RAIN:
      return Rainy;
    case Icons.SNOW:
    case Icons.SLEET:
      return Snowflake;
    case Icons.THUNDERSTORM:
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
