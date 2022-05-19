import { getDateFromMs, getDayName, getTimefromMS } from "./dateFunctions";

export const getWeatherWithDates = (HourlyData) => {
  const weatherWithDates = HourlyData.map((item) => {
    let updatedDates = {
      ...item,
      time: getTimefromMS(item.dt),
      date: getDateFromMs(item.dt),
      day: getDayName(item.dt),
    };
    return updatedDates;
  });
  return weatherWithDates;
};

export const getDaysWithHourlyDetails = (HourlyData) => {
  const weatherWithDates = getWeatherWithDates(HourlyData);
  const nameOfDays = [...new Set(weatherWithDates.map((item) => item.date))];
  return nameOfDays;
};

export const getHourlyWeatherDetails = (weatherWithDates, selectedDay) => {
  return weatherWithDates.filter((item) => item.day === selectedDay);
};

export const getCityAsURL = (city) => {
  //Keeping only name, lat, lon,parameters
  const { local_names, country, state, ...cityParameters } = city;
  const queryString = Object.keys(cityParameters)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(cityParameters[key])}`
    )
    .join("&");
  return queryString;
};
