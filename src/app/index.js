import React, { Component, Fragment } from "react";

import { Geography } from "../components/Geography";
import { Measurements } from "../components/Measurements";
import { Loading } from "../components/Loading";
import { Search } from "../components/Search";
import { Weather } from "../components/Weather";
import { Container } from "../components/Styled";
import { sequence } from "./utils";
import Mock from "../mock";

class App extends Component {
  state = { ready: false, search: "" };

  componentDidMount() {
    // Later on replace Promise.resolve(Mock) with axios get

    return Promise.resolve(Mock)
      .then(sequence)
      .then(({ measurements, indicators }) =>
        this.setState({ measurements, indicators })
      )
      .then(() => setTimeout(() => this.setState({ ready: true }), 5000));
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    alert("A name was submitted: " + this.state.search);
    event.preventDefault();
  };

  render() {
    const { measurements, indicators, ready, search } = this.state;
    return (
      <Fragment>
        <Search
          search={search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {ready ? (
          <Container>
            <Geography measurements={measurements} />
            <Measurements measurements={measurements} indicators={indicators} />
            <Weather indicators={indicators} />
          </Container>
        ) : (
          <Loading type="balls" color="white" />
        )}
      </Fragment>
    );
  }
}

export default App;
