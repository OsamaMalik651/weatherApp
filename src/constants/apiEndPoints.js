export const GET_WEATHER_BY_CITY = (lat = 51.05, lon = -114.07) =>
  `/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts`;

export const GET_CITY_DETAILS = (cityName = "Calgary") =>
  `/geo/1.0/direct?q=${cityName}`;
