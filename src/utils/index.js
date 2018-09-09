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
