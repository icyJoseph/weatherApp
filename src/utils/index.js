export const getHistory = (item, cb) => {
  const history = localStorage.getItem(item);
  if (cb) {
    return history && cb(JSON.parse(history));
  }
  return history ? JSON.parse(history) : [];
};

export const updateHistory = (storage, history, newItem) => {
  const index = history.findIndex(({ query }) => query === newItem.query);
  const newHead = [newItem];
  const updatedHistory =
    index === -1
      ? newHead.concat(history)
      : newHead.concat(
          history.slice(0, index).concat(history.slice(index + 1))
        );

  localStorage.setItem(storage, JSON.stringify(updatedHistory));

  return updatedHistory;
};

export const existingValidData = (history, currentQuery) => {
  const now = new Date().getTime();
  return history.find(
    ({ query, expiry }) => query === currentQuery && expiry < now
  );
};

export const checkGeoLocationPermission = cb => {
  if (navigator.permissions) {
    navigator.permissions.query({ name: "geolocation" }).then(result => {
      result.onchange = () => cb(result.state);
      return cb(result.state);
    });
  }
};

export const reportGeoLocation = (cb, err) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  return new Promise(resolve =>
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve(cb(coords.latitude, coords.longitude)),
      err,
      options
    )
  );
};
