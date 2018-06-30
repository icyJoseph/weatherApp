import React, { Fragment } from "react";
import { FlexSection } from "../Styled/FlexSection";

const Description = ({ description = "" }) => (
  <FlexSection>{description}</FlexSection>
);
const Temp = ({ temp = 0 }) => <FlexSection>{temp} K</FlexSection>;
const Wind = ({ wind = { speed: 0 } }) => (
  <FlexSection>{wind.speed} m/s</FlexSection>
);

const Loading = () => <div>Loading...</div>;

export const Measurements = ({ measurements = {} }) => {
  const { description, temp, wind } = measurements;
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
          <Description description={description} />
          <Temp temp={temp} />
          <Wind wind={wind} />
        </Fragment>
      ) : (
        <Loading />
      )}
    </FlexSection>
  );
};
