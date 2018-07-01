import React, { Fragment } from "react";
import { FlexSection } from "../Styled/FlexSection";
import { Temperature } from "./Temperature";

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

const City = ({ name = "" }) => (
  <FlexSection style={{ fontSize: 30 }}>{capitalize(name)}</FlexSection>
);
const Description = ({ description = "" }) => (
  <FlexSection style={{ fontSize: 30 }}>{capitalize(description)}</FlexSection>
);

const Loading = () => <div>Loading...</div>;

export const Measurements = ({ measurements = {} }) => {
  const { name, description, temp, max, min } = measurements;
  return (
    <FlexSection
      flex={3}
      direction="column"
      style={{
        marginTop: 40
      }}
    >
      {measurements ? (
        <Fragment>
          <City name={name} />
          <Description description={description} />
          <Temperature temp={temp} max={max} min={min} />
        </Fragment>
      ) : (
        <Loading />
      )}
    </FlexSection>
  );
};
