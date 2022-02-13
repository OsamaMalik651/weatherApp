import axios from "../../apis/weather";

import * as actionTypes from "../action-types";

export const getWeather = (lat, long) => async (dispatch) => {
  //temporarily hardcoded for single city
  // to be implemented: pass lat, long to get weather of searched city
  const response = await axios.get("/forecast?lat=51.05&lon=-114.07");
  dispatch({ type: actionTypes.GET_WEATHER, payload: response.data });
};
