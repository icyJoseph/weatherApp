import React from "react";
import ReactLoading from "react-loading";
import { LoadingWrapper } from "../Styled";

export const Loading = ({ type, color }) => (
  <LoadingWrapper>
    <ReactLoading type={type} color={color} height={"20%"} width={"100%"} />
  </LoadingWrapper>
);
