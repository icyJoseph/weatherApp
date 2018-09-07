import React, { Component } from "react";

import { Geography } from "../components/Geography";
import { Measurements } from "../components/Measurements";
import { Weather } from "../components/Weather";
import { Container } from "../components/Styled/Container";
import { sequence } from "./utils";
import Mock from "../mock";

class App extends Component {
  state = {};

  componentDidMount() {
    // Later on replace Promise.resolve(Mock) with axios get

    return Promise.resolve(Mock)
      .then(sequence)
      .then(({ measurements, indicators }) =>
        this.setState({ measurements, indicators })
      );
  }
  render() {
    const { measurements, indicators } = this.state;
    return (
      <Container>
        <Geography measurements={measurements} />
        <Measurements measurements={measurements} indicators={indicators} />
        <Weather indicators={indicators} />
      </Container>
    );
  }
}

export default App;
