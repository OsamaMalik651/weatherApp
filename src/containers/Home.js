import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCity, getWeather } from "../store/actions/weather";
import City from "../components/City.js";
import DayCard from "../components/DayCard.js";
import Search from "../components/Search.js";
import "../styles/Home.css";
import { getDaysWithHourlyDetails } from "../constants";
import { getDateFromMs } from "../constants/dateFunctions";

function Home() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const city = useSelector((state) => state.city);

  const [weatherData, setWeatherData] = useState(weather);
  const [currentCity, setCurrentCity] = useState(city);
  useEffect(() => {
    setWeatherData(weather);
  }, [weather]);

  useEffect(() => {
    const cityForWeather = city[0];
    if (cityForWeather) {
      const lat = cityForWeather.lat;
      const lon = cityForWeather.lon;
      dispatch(getWeather(lat, lon));
    }
    setCurrentCity(cityForWeather);
  }, [city]);

  const getWeatherData = (searchTerm) => {
    if (searchTerm) {
      dispatch(getCity(searchTerm));
    }
  };

  const dayElements = [];
  if (weatherData.daily) {
    const daysWithHourlyDetails = getDaysWithHourlyDetails(weatherData.hourly);
    dayElements.push(
      weatherData.daily.map((day, index) => {
        let date = getDateFromMs(day.dt);
        if (daysWithHourlyDetails.includes(date)) {
          return <DayCard key={index} day={day} isActive={true} />;
        } else {
          return <DayCard key={index} day={day} isActive={false} />;
        }
      })
    );
  }
  return (
    <div className="home">
      <Search onSearchButtonClick={(event) => getWeatherData(event)} />
      <div className="city-current-weather">
        {weatherData.current && (
          <City
            name={currentCity.name}
            country={currentCity.country}
            state={currentCity.state}
            currentWeather={weatherData.current}
          />
        )}
      </div>

      {dayElements.length ? (
        <div className="daily-weather shadow">{dayElements}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
