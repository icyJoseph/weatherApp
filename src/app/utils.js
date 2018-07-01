export const sequence = ({
  weather,
  main: { temp, temp_max, temp_min },
  wind,
  snow,
  rain,
  clouds,
  sys: { sunrise, sunset }
}) => {
  const [{ main, description }] = weather;
  const measurements = {
    description,
    temp,
    max: temp_max,
    min: temp_min,
    wind
  };
  const indicators = {
    main,
    clouds,
    rain,
    snow,
    wind,
    sunrise,
    sunset
  };
  return { measurements, indicators };
};
