import React, { Component } from "react";

import { Geography } from "../components/Geography";
import { Measurements } from "../components/Measurements";
import { Loading } from "../components/Loading";
import { Weather } from "../components/Weather";
import { Container } from "../components/Styled";
import { sequence } from "./utils";
import Mock from "../mock";

class App extends Component {
  state = { ready: false };

  componentDidMount() {
    // Later on replace Promise.resolve(Mock) with axios get

    return Promise.resolve(Mock)
      .then(sequence)
      .then(({ measurements, indicators }) =>
        this.setState({ measurements, indicators })
      );
  }
  render() {
    const { measurements, indicators, ready } = this.state;
    return ready ? (
      <Container>
        <Geography measurements={measurements} />
        <Measurements measurements={measurements} indicators={indicators} />
        <Weather indicators={indicators} />
      </Container>
    ) : (
      <Loading type="balls" color="white" />
    );
  }
}

export default App;
