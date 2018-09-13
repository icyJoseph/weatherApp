import axios from "axios";

const byAddressEndPoint =
  "https://wt-eb857ce9bac13bdd2efcf8e93fb9fdcc-0.sandbox.auth0-extend.com/weather-express/byAddress";
const byLatLngEndPoint =
  "https://wt-eb857ce9bac13bdd2efcf8e93fb9fdcc-0.sandbox.auth0-extend.com/weather-express/byLatLng";

export const addExpiry = weather => {
  const now = new Date().getTime();
  return { ...weather, expiry: now + 1000 };
};

export const byAddressPipe = (query, cb, errCb) => {
  return axios
    .post(byAddressEndPoint, { address: query })
    .then(({ data }) => data)
    .then(addExpiry)
    .then(res => cb(res, query))
    .catch(error => errCb({ error }));
};
