import axios from "../../apis/weather";
import { actionTypes } from "../action-types";
import { getCityDetails, getCityWeather } from "../../services/weather.js";

export const getWeather = (lat, long) => async (dispatch) => {
  const response = await getCityWeather(lat, long);
  dispatch({ type: actionTypes.GET_WEATHER, payload: response });
};

export const getCity = (cityName) => async (dispatch) => {
  const response = await getCityDetails(cityName);
  dispatch({ type: actionTypes.GET_CITY, payload: response });
};
