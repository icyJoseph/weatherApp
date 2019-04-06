export const SET_QUERY = "set query";
export const ADD_RESULT = "add result";
export const SET_ERROR = "set error";
export const SET_LOCATION = "set location";
export const SET_RESULTS = "set results";
export const SET_LOADING = "set loading";
export const RESET_LOADING = "reset loading";
export const SET_PERMISSION = "set permission";

export const initialState = {
  query: "",
  error: null,
  results: [],
  loading: false,
  permission: "",
  lat: null,
  lng: null
};

// local helper
const uniqueQuery = (prev, curr) =>
  prev.find(item => item.query === curr.query) ? prev : prev.concat(curr);

export function reducer(state, { type, payload }) {
  switch (type) {
    case SET_QUERY:
      return { ...state, query: payload };
    case ADD_RESULT:
      return {
        ...state,
        results: [payload, ...state.results].reduce(uniqueQuery, []),
        query: "",
        error: null,
        loading: false
      };
    case SET_RESULTS:
      return { ...state, results: payload };
    case SET_PERMISSION:
      return { ...state, permission: payload };
    case SET_LOADING:
      return { ...state, loading: true, error: null };
    case RESET_LOADING:
      return { ...state, loading: false };
    case SET_LOCATION:
      return { ...state, lat: payload.lat, lng: payload.lng, error: null };
    case SET_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
}

export default reducer;
