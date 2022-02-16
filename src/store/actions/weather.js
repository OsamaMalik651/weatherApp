import axios from "../../apis/weather";
import { GET_WEATHER, GET_CITY } from "../action-types";
import { getCityDetails, getCityWeather } from "../../services/weather.js";

export const getWeather = (lat, long) => async (dispatch) => {
  const response = await getCityWeather(lat, long);
  dispatch({ type: GET_WEATHER, payload: response });
};

export const getCity = (cityName) => async (dispatch) => {
  const response = await getCityDetails(cityName);
  dispatch({ type: GET_CITY, payload: response });
};
