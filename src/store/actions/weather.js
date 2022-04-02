import { actionTypes } from "../action-types";
import { getCityDetails, getCityWeather } from "../../services/weather.js";

export const getWeather = (lat, long) => async (dispatch) => {
  const response = await getCityWeather(lat, long);
  dispatch({ type: actionTypes.GET_WEATHER, payload: response });
};

export const getCity = (cityName) => async (dispatch) => {
  const response = await getCityDetails(cityName);
  dispatch({ type: actionTypes.GET_CITY, payload: response });
  dispatch({ type: actionTypes.SET_SEARCHTERM, payload: cityName });
};

export const clearWeatherData = () => (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_WEATHER });
};

export const setSelectedCity = (city) => (dispatch) => {
  dispatch({ type: actionTypes.SET_SELECTEDCITY, payload: city });
};
