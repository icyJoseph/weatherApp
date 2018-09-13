import axios from "axios";

const endPoint =
  "https://wt-eb857ce9bac13bdd2efcf8e93fb9fdcc-0.sandbox.auth0-extend.com/weather-express/geoweather";

export const addExpiry = weather => {
  const now = new Date().getTime();
  return { ...weather, expiry: now + 1000 };
};

export const weatherPipe = (query, cb, errCb) => {
  return axios
    .post(endPoint, { address: query })
    .then(({ data }) => data)
    .then(addExpiry)
    .then(res => cb(res, query))
    .catch(error => errCb({ error }));
};
