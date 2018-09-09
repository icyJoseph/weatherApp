export const getHistory = (item, cb) => {
  const history = localStorage.getItem(item);
  return history && cb(JSON.parse(item));
};
