import React, { Component } from "react";
import { Measurements } from "../components/Measurements";
import { Weather } from "../components/Weather";

import { Smartphone } from "../components/Smartphone";

import { Container } from "../components/Styled/Container";

class App extends Component {
  render() {
    return (
      <Container>
        <Measurements />
        <Weather />
        <Smartphone />
      </Container>
    );
  }
}

export default App;
