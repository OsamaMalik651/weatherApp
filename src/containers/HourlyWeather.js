import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { Container } from "reactstrap";
import { getHourlyWeatherDetails, getWeatherWithDates } from "../constants";

import HourlyCard from "../components/HourlyCard";
import { retrieveSearchParams } from "../constants/HourlyFunctions";
import { getWeather } from "../store/actions/weather";

const HourlyWeather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const { dayName: selectedDay } = useParams();
  const [searchParams] = useSearchParams();
  const { lat, lon } = retrieveSearchParams(searchParams);
  const [hourlyWeatherData, setHourlyWeatherData] = useState(weather.hourly);

  useEffect(() => {
    if ((lat, lon)) {
      dispatch(getWeather(lat, lon));
    }
  }, [lat, lon, dispatch]);

  useEffect(() => {
    if (weather.hourly) {
      setHourlyWeatherData(weather.hourly);
    }
  }, [weather]);
  let hourlyElements = [];
  if (hourlyWeatherData) {
    const weatherWithDates = getWeatherWithDates(hourlyWeatherData);

    const hourlyWeather = getHourlyWeatherDetails(
      weatherWithDates,
      selectedDay
    );
    hourlyElements = hourlyWeather.map((hour, index) => (
      <li key={index} className="list-group-item">
        <HourlyCard hour={hour} />
      </li>
    ));
  }

  return (
    <div>
      {hourlyElements && (
        <Container fluid="md" className="w-75 border">
          <ul className="list-group list-group-flush">{hourlyElements}</ul>
        </Container>
      )}
    </div>
  );
};

export default HourlyWeather;
