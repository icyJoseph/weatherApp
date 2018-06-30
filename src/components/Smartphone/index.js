import React from "react";

import smartphone from "../../logos/smartphone.png";

export const Smartphone = () => (
  <div
    style={{
      flex: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start"
    }}
  >
    <img style={{ width: "500px" }} alt="smartphone" src={smartphone} />
  </div>
);
