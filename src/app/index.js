import React, { Component, Fragment } from "react";
import { Geography } from "../components/Geography";
import { Measurements } from "../components/Measurements";
import { Loading } from "../components/Loading";
import { Search } from "../components/Search";
import { Weather } from "../components/Weather";
import { Container } from "../components/Styled";
import { weatherPipe } from "../api";
import { getHistory, updateHistory, existingValidData } from "../utils";
import { debounce } from "../helpers";
import { weatherApp } from "../constants";

class App extends Component {
  state = { query: "", error: null, history: [] };

  componentDidMount() {
    // if no history, then it remains at []
    return getHistory(weatherApp, this.setHistory);
  }

  // update state after a search
  updateState = (weather, query) => {
    const toSave = { ...weather, query };
    const history = getHistory(weatherApp);
    const updatedHistory = updateHistory(weatherApp, history, toSave);
    return this.setState(prevState => ({
      ...prevState,
      history: updatedHistory,
      weather
    }));
  };

  // setters
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

  setError = error => this.setState({ error });

  // handlers
  handleChange = event => {
    return this.setState({
      query: event.target.value.toLowerCase()
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { query } = this.state;

    if (query === "") return null;

    const history = getHistory(weatherApp);
    const existingValidWeatherData = existingValidData(history, query);

    if (existingValidWeatherData)
      return this.setWeather(existingValidWeatherData);

    return this.fetchWeather(query, this.updateState, this.setError);
  };

  // debounce fetch
  fetchWeather = debounce(weatherPipe, 1000);

  render() {
    const { weather, query, error } = this.state;
    return (
      <Fragment>
        <Search
          query={query}
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
