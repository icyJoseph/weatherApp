import React, { Component, Fragment } from "react";
import axios from "axios";

import { Geography } from "../components/Geography";
import { Measurements } from "../components/Measurements";
import { Loading } from "../components/Loading";
import { Search } from "../components/Search";
import { Weather } from "../components/Weather";
import { Container } from "../components/Styled";

import { debounce } from "../helpers";

const weatherApp = "weather-app";

class App extends Component {
  state = { search: "", error: null, history: [] };

  componentDidMount() {
    const history = localStorage.getItem(weatherApp);
    return history && this.setHistory(JSON.parse(history));
  }

  saveWeather = (weather, search) => {
    const cache = localStorage.getItem(weatherApp);
    const storage = cache ? JSON.parse(cache) : [];
    const toSave = [{ ...weather, query: search }];
    const existingIndex = storage.findIndex(({ query }) => query === search);

    const history =
      existingIndex === -1
        ? toSave.concat(storage)
        : toSave.concat(
            storage
              .slice(0, existingIndex)
              .concat(storage.slice(existingIndex + 1))
          );

    localStorage.setItem(weatherApp, JSON.stringify(history));
    this.setHistory(history);
    return weather;
  };

  setWeather = weather => {
    return this.setState(prevState => ({ ...prevState, weather, error: null }));
  };

  setHistory = history => {
    return this.setState(prevState => ({
      ...prevState,
      history,
      error: null
    }));
  };

  handleChange = event => {
    return this.setState({
      search: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.search === "") {
      return null;
    }
    const cache = localStorage.getItem(weatherApp);
    const history = cache ? JSON.parse(cache) : [];
    const now = new Date().getTime();
    const { search } = this.state;
    const storeHasValidData = history.find(
      ({ query, expiry }) => query === search && expiry < now
    );

    return storeHasValidData || this.fetchWeather(this.state.search);
  };

  weatherPipe = () => {
    const test = "http://localhost:1337/test";
    const { search } = this.state;
    return axios
      .post(test, { address: search })
      .then(this.extractData)
      .then(this.addExpiry)
      .then(res => this.saveWeather(res, search))
      .then(this.setWeather)
      .catch(error => this.setState({ error }));
  };

  fetchWeather = debounce(this.weatherPipe, 1000);

  addExpiry = weather => {
    const now = new Date().getTime();
    return { ...weather, expiry: now + 1000 };
  };

  extractData = ({ data }) => {
    return data;
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
            <Measurements {...weather} />
            <Weather {...weather} />
          </Container>
        ) : (
          <Loading type="balls" color="white" />
        )}
      </Fragment>
    );
  }
}

export default App;
