import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCloud,
  // faCloudSun,
  faCloudRain,
  // faCloudSunRain,
  // faCloudMoon,
  // faCloudMoonRain,
  faWind,
  faSnowflake,
  faBolt
} from "@fortawesome/free-solid-svg-icons";

import { Icons } from "../../constants";

const selector = icon => {
  switch (icon) {
    case Icons.CLEAR_DAY:
      return faSun;
    case Icons.CLEAR_NIGHT:
      return faMoon;
    case Icons.WIND:
      return faWind;
    case Icons.FOG:
    case Icons.CLOUDY:
    case Icons.PARTLY_CLOUDY_DAY:
    case Icons.PARTLY_CLOUDY_NIGHT:
      return faCloud;
    case Icons.RAIN:
      return faCloudRain;
    case Icons.SNOW:
    case Icons.SLEET:
      return faSnowflake;
    case Icons.THUNDERSTORM:
      return faBolt;
    default:
      return faSun;
  }
};

export const Weather = ({ currently: { icon } }) => {
  return (
    <div>
      <FontAwesomeIcon icon={selector(icon)} />
    </div>
  );
};
