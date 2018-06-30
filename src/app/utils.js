export const sequence = ({
  weather,
  main: { temp },
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
