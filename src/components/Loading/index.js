import React from "react";
import ReactLoading from "react-loading";
import { LoadingWrapper } from "../Styled";

export const Loading = ({ type, color }) => (
  <LoadingWrapper>
    <div>
      <ReactLoading type={type} color={color} height={"10%"} width={"10%"} />
    </div>
  </LoadingWrapper>
);
