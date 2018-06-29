import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AllLogos } from "./logos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather App</h1>
        </header>
        {AllLogos.map((Logo, index) => (
          <svg key={index} style={{ height: "300px", margin: 100 }}>
            <Logo />
          </svg>
        ))}
      </div>
    );
  }
}

export default App;
