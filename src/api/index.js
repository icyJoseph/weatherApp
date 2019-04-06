import axios from "axios";

const byAddressEndPoint = `${process.env.REACT_APP_ENDPOINT}/byAddress`;

const byLatLngEndPoint = `${process.env.REACT_APP_ENDPOINT}/byLatLng`;

export const addExpiry = weather => {
  const now = new Date().getTime();
  return { ...weather, expiry: now + 1000 };
};

export const byAddressPipe = (query, cb, errCb, onInit) => {
  onInit();
  return axios
    .post(byAddressEndPoint, { address: query })
    .then(({ data }) => data)
    .then(addExpiry)
    .then(res => cb(res, query))
    .catch(error => errCb({ error }));
};

export const byLatLngPipe = (query, cb, errCb, onInit) => {
  onInit();
  return axios
    .post(byLatLngEndPoint, { ...query })
    .then(({ data }) => data)
    .then(addExpiry)
    .then(res => cb(res, `${res.city}, ${res.street}`))
    .catch(error => errCb({ error }));
};
