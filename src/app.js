import React, { Fragment, useReducer, useEffect } from "react";
import { Geography } from "./components/Geography";
import { Emoji } from "./components/Emoji";
import { Measurements } from "./components/Measurements";
import { Loading } from "./components/Loading";
import { Search } from "./components/Search";
import { Weather } from "./components/Weather";
import { Magic } from "./components/Magic";
import { Clear } from "./components/Clear";
import { Refresh } from "./components/Refresh";
import {
  WeatherCard,
  Container,
  EmojiContainer,
  Bottom,
  Results
} from "./components/Styled";
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
import reducer, {
  initialState,
  SET_PERMISSION,
  SET_LOCATION,
  SET_RESULTS,
  ADD_RESULT,
  SET_LOADING,
  SET_ERROR,
  SET_QUERY
} from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { query, error, loading, lat, lng, results } = state;

  // error action creator
  const setError = payload => dispatch({ type: SET_ERROR, payload });
  // loading action creator
  const setLoading = () => dispatch({ type: SET_LOADING });
  // dispatch set location
  const setLocationCoordinates = (lat, lng) =>
    dispatch({ type: SET_LOCATION, payload: { lat, lng } });
  // call for reportGeoLocation, browser query
  const getGeoLocation = () =>
    reportGeoLocation(setLocationCoordinates, setError);
  // pair a query with weather data and dispatch
  const addResult = (weather, query) => {
    const payload = { ...weather, query };
    return dispatch({
      type: ADD_RESULT,
      payload
    });
  };
  // update query on reducer
  const handleChange = event => {
    return dispatch({
      type: SET_QUERY,
      payload: event.target.value.toLowerCase()
    });
  };
  // handle query submission
  const handleSubmit = event => {
    event.preventDefault();

    if (loading) {
      return null;
    }

    if (query === "") {
      return null;
    }

    const storedResults = getHistory(weatherApp);
    const existingValidWeatherData = existingValidData(storedResults, query);

    if (existingValidWeatherData) {
      return addResult(existingValidWeatherData, query);
    }

    return fetchWeatherByAddress(query, addResult, setError, setLoading);
  };

  // debounce fetch api calls
  const fetchWeatherByAddress = debounce(byAddressPipe, 1000);
  const fetchWeatherByLatLng = debounce(byLatLngPipe, 1000);

  useEffect(() => {
    checkGeoLocationPermission(payload =>
      dispatch({ type: SET_PERMISSION, payload })
    );

    getHistory(weatherApp, payload => dispatch({ type: SET_RESULTS, payload }));
  }, []);

  useEffect(() => {
    lat &&
      lng &&
      fetchWeatherByLatLng({ lat, lng }, addResult, setError, setLoading);
  }, [lat, lng]);

  useEffect(() => {
    updateHistory(weatherApp, results);
  }, [results]);

  return (
    <Fragment>
      <Search
        query={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        disabled={loading}
      />
      <Container>
        {error && (
          <EmojiContainer>
            {FailureEmojis.map(({ label, symbol }) => (
              <Emoji key={label} label={label} symbol={symbol} />
            ))}
          </EmojiContainer>
        )}
        {loading && <Loading type="spin" color="#663633" />}
        <Results>
          {results.map(data => (
            <WeatherCard key={data.query}>
              <Geography {...data} />
              <Measurements {...data}>
                <Weather {...data} />
              </Measurements>
            </WeatherCard>
          ))}
        </Results>
      </Container>
      <Bottom>
        <Magic callback={getGeoLocation} />
        <Refresh callback={() => {}} />
        <Clear callback={() => dispatch({ type: SET_RESULTS, payload: [] })} />
      </Bottom>
    </Fragment>
  );
}

export default App;
