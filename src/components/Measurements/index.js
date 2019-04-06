import React from "react";
import { Thermometer } from "../Thermometer";

export const Measurements = ({
  currently = {},
  daily: { data = [] },
  children
}) => {
  const { temperature } = currently;

  const [{ temperatureHigh, temperatureLow }] = data;
  const [celsius, maxTemp, minTemp] = [
    temperature,
    temperatureHigh,
    temperatureLow
  ];

  return (
    <div>
      <span>
        {children}
        <svg width="50px" height="50px" viewBox="0 0 300 300">
          <Thermometer celsius={celsius} />
        </svg>
        <span style={{ fontSize: "2em" }}>
          {celsius.toFixed(0)}
          <span>&deg;C</span>
        </span>
      </span>
      <div>
        <span style={{ fontSize: "1em" }}>
          min: {minTemp.toFixed(0)}
          <span>&deg;C</span>
          {" - "}
          max: {maxTemp.toFixed(0)}
          <span>&deg;C</span>
        </span>
      </div>
    </div>
  );
};
