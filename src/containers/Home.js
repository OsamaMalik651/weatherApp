import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCity, getWeather } from "../store/actions/weather";
import City from "../components/City.js";
import DayCard from "../components/DayCard.js";
import Search from "../components/Search.js";
import "../styles/Home.css";

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
    dayElements.push(
      weatherData.daily.map((day, index) => <DayCard key={index} day={day} />)
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
