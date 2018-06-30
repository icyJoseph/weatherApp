import React, { Component } from "react";
import smartphone from "./logos/smartphone.png";
import { Sun } from "./logos/sun";

const Measurements = () => (
  <div
    style={{
      flex: 3,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white"
    }}
  >
    Measurements
  </div>
);
const Weather = () => (
  <div
    style={{
      flex: 3,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <svg width="100" height="100" viewBox="0 0 300 300">
      <Sun />
    </svg>
  </div>
);

class App extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Measurements />
        <Weather />
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
      </div>
    );
  }
}

export default App;
