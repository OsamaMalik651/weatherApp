import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { getHourlyWeatherDetails, getWeatherWithDates } from "../constants";
import {
  getDateFromMs,
  getDayName,
  getTimefromMS,
} from "../constants/dateFunctions";
import HourlyCard from "./HourlyCard";

const HourlyWeather = () => {
  const weather = useSelector((state) => state.weather);
  const [hourlyWeatherData, setHourlyWeatherData] = useState(weather.hourly);

  const selectedDay = useParams().dayName;

  const weatherWithDates = getWeatherWithDates(hourlyWeatherData);

  let hourlyWeather = getHourlyWeatherDetails(weatherWithDates, selectedDay);

  const hourlyElements = hourlyWeather.map((hour, index) => (
    <li className="list-group-item">
      <HourlyCard key={index} hour={hour} />
    </li>
  ));
  return (
    <div>
      <Container fluid="md" className="w-75 border">
        <ul className="list-group list-group-flush">{hourlyElements}</ul>
      </Container>
    </div>
  );
};

export default HourlyWeather;
