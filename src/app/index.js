import React, { Component, Fragment } from "react";
import axios from "axios";

import { Geography } from "../components/Geography";
import { Measurements } from "../components/Measurements";
import { Loading } from "../components/Loading";
import { Search } from "../components/Search";
import { Weather } from "../components/Weather";
import { Container } from "../components/Styled";

import { debounce } from "../helpers";

class App extends Component {
  state = { search: "", error: null };

  componentDidMount() {
    const cache = localStorage.getItem("weather-app");
    return cache && this.setWeather(JSON.parse(cache));
  }

  saveWeather = (weather, search) => {
    const cache = localStorage.getItem("weather-app");
    const storage = cache ? JSON.parse(cache) : {};

    localStorage.setItem(
      "weather-app",
      JSON.stringify({ ...storage, [search]: weather })
    );
    return weather;
  };

  setWeather = weather => {
    return this.setState(prevState => ({ ...prevState, weather, error: null }));
  };

  handleChange = event => {
    return this.setState({
      search: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const cache = localStorage.getItem("weather-app");
    const storage = cache ? JSON.parse(cache) : {};
    const now = new Date().getTime();
    const storeHasValidData = storage[this.state.search]
      ? storage[this.state.search].expiry < now
      : false;

    return storeHasValidData || this.fetchWeather(this.state.search);
  };

  weatherPipe = search => {
    const test = "http://localhost:1337/test";
    return axios
      .post(
        test,
        { address: search },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(this.addExpiry)
      .then(res => this.saveWeather(res, search))
      .then(this.setWeather)
      .catch(error => this.setState({ error }));
  };

  fetchWeather = debounce(search => this.weatherPipe(search), 1000);

  addExpiry = weather => {
    const now = new Date().getTime();
    return { ...weather, expiry: now + 1000 };
  };

  render() {
    const { weather, search, error } = this.state;
    return (
      <Fragment>
        <Search
          search={search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {error && <div>Error...</div>}
        {weather ? (
          <Container>
            <Geography {...weather} />
            {/* <Measurements measurements={measurements} indicators={indicators} /> */}
            {/* <Weather indicators={indicators} /> */}
          </Container>
        ) : (
          <Loading type="balls" color="white" />
        )}
      </Fragment>
    );
  }
}

export default App;
