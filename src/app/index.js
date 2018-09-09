import React, { Component, Fragment } from "react";
import { Geography } from "../components/Geography";
import { Emoji } from "../components/Emoji";
import { Measurements } from "../components/Measurements";
import { Loading } from "../components/Loading";
import { Search } from "../components/Search";
import { Weather } from "../components/Weather";
import { WeatherCard, Image } from "../components/Styled";
import { weatherPipe } from "../api";
import { getHistory, updateHistory, existingValidData } from "../utils";
import { debounce } from "../helpers";
import { weatherApp, FailureEmojis } from "../constants";

import Splash from "../logos/magicwand.png";

class App extends Component {
  state = {
    query: "",
    weather: null,
    error: null,
    history: [],
    loading: false
  };

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
      weather,
      loading: false
    }));
  };

  // setters
  setWeather = weather => {
    return this.setState(prevState => ({
      ...prevState,
      weather,
      error: null,
      loading: false
    }));
  };

  setHistory = history => {
    return this.setState(prevState => ({
      ...prevState,
      history,
      error: null
    }));
  };

  setError = error => this.setState({ error, loading: false });
  setLoading = () => this.setState({ loading: true });

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
    this.setLoading();
    const history = getHistory(weatherApp);
    const existingValidWeatherData = existingValidData(history, query);

    if (existingValidWeatherData)
      return this.setWeather(existingValidWeatherData);

    return this.fetchWeather(
      query,
      this.updateState,
      this.setError,
      this.setLoading
    );
  };

  // debounce fetch
  fetchWeather = debounce(weatherPipe, 1000);

  render() {
    const { weather, query, error, loading } = this.state;
    return (
      <Fragment>
        <Search
          query={query}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {error &&
          !loading &&
          FailureEmojis.map(({ label, symbol }) => (
            <Emoji key={label} label={label} symbol={symbol} />
          ))}
        {!weather &&
          !error &&
          !loading && (
            <Image src={Splash} width="200px" height="auto" draggable={false} />
          )}
        {loading && <Loading type="balls" color="white" />}
        {weather && (
          <WeatherCard>
            <Geography {...weather} />
            <Measurements {...weather} />
            <Weather {...weather} />
          </WeatherCard>
        )}
      </Fragment>
    );
  }
}

export default App;
