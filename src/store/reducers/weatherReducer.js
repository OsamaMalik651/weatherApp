import { actionTypes } from "../action-types";

const initialState = {
  lat: 0,
  lon: 0,
  timezone: "A",
  timezone_offset: 0,
  current: {},
  hourly: [],
  daily: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WEATHER:
      return action.payload;
    case actionTypes.CLEAR_WEATHER:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
