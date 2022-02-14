import axios from "../apis/weather";
import { GET_WEATHER_BY_CITY } from "../constants";
const { REACT_APP_APP_ID } = process.env;

export const getCityWeather = async (lat, lon) => {
  const response = await axios.get(GET_WEATHER_BY_CITY(lat, lon), {
    params: {
      appid: REACT_APP_APP_ID,
    },
  });
  return response.data;
};
