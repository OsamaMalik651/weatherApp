import axios from "../../apis/weather";
import { GET_WEATHER } from "../action-types";
import { getCityWeather } from "../../services/weather.js";

export const getWeather = (lat, long) => async (dispatch) => {
  const response = await getCityWeather(lat, long);
  dispatch({ type: GET_WEATHER, payload: response });
};
