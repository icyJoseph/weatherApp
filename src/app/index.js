import React, { Component } from "react";
import { Measurements } from "../components/Measurements";
import { Weather } from "../components/Weather";
import { Smartphone } from "../components/Smartphone";

import { Container } from "../components/Styled/Container";

import { sequence } from "./utils";

import Mock from "../mock";

class App extends Component {
  state = { measurements: null, indicators: null };

  componentDidMount() {
    // Later on replace Promise.resolve(Mock) with axios get

    return Promise.resolve(Mock)
      .then(sequence)
      .then(({ measurements, indicators }) =>
        this.setState({ measurements, indicators })
      );
  }
  render() {
    return (
      <Container>
        <Measurements measurements={this.state.measurements} />
        <Weather indicators={this.state.indicators} />
        <Smartphone />
      </Container>
    );
  }
}

export default App;
