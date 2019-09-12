import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchData = (partial) => dispatch => {
  let baseURL = "https://www.metaweather.com/api/location";
  let url = baseURL + partial;
  dispatch({type: FETCH_DATA});
  axios.get(url)
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
    .catch(err => console.log(err.response));
}