import React from "react";
import { FlexSection } from "../Styled/FlexSection";
import { Temperature } from "./Temperature";
import { SvgContainer } from "../Styled/SvgContainer";
import { Thermometer } from "../../logos/thermometer";

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

const City = ({ name = "" }) => (
  <FlexSection style={{ fontSize: 30 }}>{capitalize(name)}</FlexSection>
);
const Description = ({ description = "" }) => (
  <FlexSection style={{ fontSize: 30 }}>{capitalize(description)}</FlexSection>
);

const Loading = () => <div>Loading...</div>;

const K2C = temp => temp - 273;

export const Measurements = ({ measurements = {} }) => {
  const { name, description, temp, max, min } = measurements;
  const [celsius, maxTemp, minTemp] = [temp, max, min].map(K2C);

  return (
    <FlexSection
      flex={3}
      direction="column"
      style={{
        marginTop: 40
      }}
    >
      {measurements ? (
        <FlexSection>
          <FlexSection>
            <SvgContainer width="150px" height="150px" viewBox="0 0 300 300">
              <Thermometer celsius={celsius} />
            </SvgContainer>
          </FlexSection>
          <FlexSection
            flex={3}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <City name={name} />
            <Description description={description} />
            <Temperature
              celsius={celsius}
              maxTemp={maxTemp}
              minTemp={minTemp}
            />
          </FlexSection>
        </FlexSection>
      ) : (
        <Loading />
      )}
    </FlexSection>
  );
};
