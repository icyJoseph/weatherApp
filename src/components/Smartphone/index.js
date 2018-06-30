import React from "react";
import { FlexSection } from "../Styled/FlexSection";

import smartphone from "../../logos/smartphone.png";

export const Smartphone = () => (
  <FlexSection flex={5} alignItems="flex-start">
    <img style={{ width: "500px" }} alt="smartphone" src={smartphone} />
  </FlexSection>
);
