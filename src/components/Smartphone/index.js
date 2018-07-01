import React from "react";
import { FlexSection } from "../Styled/FlexSection";
import { Image } from "../Styled/Image";
import smartphone from "../../logos/smartphone.png";

export const Smartphone = () => (
  <FlexSection
    flex={4}
    style={{
      borderRadius: "300px 300px 40px 40px/ 300px 300px 40px 40px",
      background: "#fc6363"
    }}
  >
    <Image alt="smartphone" src={smartphone} />
  </FlexSection>
);
