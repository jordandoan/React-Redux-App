import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

export const reducer  = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA:
      return {...state, isFetching: true}
    case FETCH_SUCCESS:
      console.log(action.payload);
      return {...state, results: action.payload, isFetching: false}
    case FETCH_FAILURE:
      return {...state, results: "", isFetching: false}
    default:
      return state
  }
}

const initialState = {
  title: "Weather App",
  results: "",
  error: "",
  isFetching: false,
}