export const sequence = ({
  weather,
  main: { temp },
  wind,
  snow,
  rain,
  clouds,
  sys: { sunrise, sunset }
}) => {
  const { main, description } = weather;
  const measurements = {
    main,
    description,
    temp,
    wind,
    sunrise,
    sunset
  };
  const indicators = {
    clouds,
    rain,
    snow,
    wind
  };
  return { measurements, indicators };
};
