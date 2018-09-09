import axios from "axios";

export const addExpiry = weather => {
  const now = new Date().getTime();
  return { ...weather, expiry: now + 1000 };
};

export const weatherPipe = (query, cb, errCb) => {
  const url = "http://localhost:1337/test";

  return axios
    .post(url, { address: query })
    .then(({ data }) => data)
    .then(addExpiry)
    .then(res => cb(res, query))
    .catch(error => errCb({ error }));
};
