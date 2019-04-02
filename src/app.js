import React, { Component, Fragment } from "react";
import { Geography } from "./components/Geography";
import { Emoji } from "./components/Emoji";
import { Measurements } from "./components/Measurements";
import { Loading } from "./components/Loading";
import { Search } from "./components/Search";
import { Weather } from "./components/Weather";
import { Magic } from "./components/MagicButton";
import { WeatherCard, Container, EmojiContainer } from "./components/Styled";
import { byAddressPipe, byLatLngPipe } from "./api";
import {
  getHistory,
  updateHistory,
  existingValidData,
  checkGeoLocationPermission,
  reportGeoLocation
} from "./utils";
import { debounce } from "./helpers";
import { weatherApp, FailureEmojis } from "./constants";

class App extends Component {
  state = {
    query: "",
    weather: null,
    error: null,
    history: [],
    loading: false,
    permission: "",
    lat: null,
    lng: null
  };

  componentDidMount() {
    // if no history, then it remains at []
    return (
      checkGeoLocationPermission(this.setGeoLocationPermission) ||
      getHistory(weatherApp, this.setHistory)
    );
  }

  setGeoLocationPermission = state => this.setState({ permission: state });

  setLocationCoordinates = (lat, lng) => this.setState({ lat, lng });

  getGeoLocation = () =>
    reportGeoLocation(this.setLocationCoordinates, this.setError).then(() => {
      const { lat, lng } = this.state;
      this.setLoading();
      return this.fetchWeatherByLatLng(
        { lat, lng },
        this.updateState,
        this.setError
      );
    });

  // update state after a search
  updateState = (weather, query) => {
    const toSave = { ...weather, query };
    const history = getHistory(weatherApp);
    const updatedHistory = updateHistory(weatherApp, history, toSave);
    return this.setState(prevState => ({
      ...prevState,
      history: updatedHistory,
      weather: toSave,
      loading: false,
      error: null
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

    return this.fetchWeatherByAddress(
      query,
      this.updateState,
      this.setError,
      this.setLoading
    );
  };

  // debounce fetch
  fetchWeatherByAddress = debounce(byAddressPipe, 1000);
  fetchWeatherByLatLng = debounce(byLatLngPipe, 1000);

  render() {
    const { weather, query, error, loading } = this.state;
    const shouldShowFailureEmoji = error && !loading;
    const shouldShowMagicWand = !weather && !error && !loading;
    const shouldShowWeatherCard = weather && !error && !loading;
    return (
      <Fragment>
        <Search
          query={query}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Container>
          {shouldShowFailureEmoji && (
            <EmojiContainer>
              {FailureEmojis.map(({ label, symbol }) => (
                <Emoji key={label} label={label} symbol={symbol} />
              ))}
            </EmojiContainer>
          )}
          {shouldShowMagicWand && <Magic onClick={this.getGeoLocation} />}
          {loading && <Loading type="balls" color="white" />}
          {shouldShowWeatherCard && (
            <WeatherCard>
              <Geography {...weather} />
              <Measurements {...weather} />
              <Weather {...weather} />
            </WeatherCard>
          )}
        </Container>
      </Fragment>
    );
  }
}

export default App;
