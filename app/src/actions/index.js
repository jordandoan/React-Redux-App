import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const RESET = "RESET";

export const fetchData = (partial) => dispatch => {
  let baseURL = "https://www.metaweather.com/api/location";
  let url = baseURL + partial;
  dispatch({type: FETCH_DATA});
  axios.get(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    })
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_FAILURE, payload: err.response}));
}

export const resetState = () => {
  return {type: RESET}
}