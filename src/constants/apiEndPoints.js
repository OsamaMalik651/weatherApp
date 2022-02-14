export const GET_WEATHER_BY_CITY = (lat = 51, lon = -114) =>
  `/forecast?lat=${lat}.05&lon=${lon}`;
