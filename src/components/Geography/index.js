import React from "react";
import { FlexSection } from "../Styled";

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

export const Geography = ({ city = "", street = "", query = "" }) => {
  return (
    <FlexSection
      flex={3}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <City name={city || query} />
      <Description description={street} />
    </FlexSection>
  );
};
