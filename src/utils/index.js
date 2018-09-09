export const getHistory = (item, cb) => {
  const history = localStorage.getItem(item);
  if (cb) {
    return history && cb(JSON.parse(item));
  }
  return history ? JSON.parse(history) : [];
};
