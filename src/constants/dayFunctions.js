import { getDateFromMs, getDayName, getTimefromMS } from "./dateFunctions";

export const getWeatherWithDates = (HourlyData) => {
  const weatherWithDates = HourlyData.map((item) => {
    let updatedDates = {
      ...item,
      dt: getTimefromMS(item.dt),
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
