import { FETCH_DATA, FETCH_SUCCESS } from '../actions';

export const reducer  = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA:
      return {...state, isFetching: true}
    case FETCH_SUCCESS:
      return {...state, results: action.payload, isFetching: false}
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