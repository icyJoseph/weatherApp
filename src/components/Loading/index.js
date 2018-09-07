import React from "react";
import ReactLoading from "react-loading";

export const Loading = ({ type, color }) => (
  <div
    style={{
      display: "flex",
      flex: 1,
      width: "100px"
    }}
  >
    <ReactLoading type={type} color={color} height={"20%"} width={"100%"} />
  </div>
);
