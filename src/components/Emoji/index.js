import React from "react";

export const Emoji = ({ label, symbol }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
    style={{ fontSize: "48pt" }}
  >
    {symbol}
  </span>
);

export default Emoji;
