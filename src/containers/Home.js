import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import data from "../data.js";
import { getWeather } from "../store/actions/weather";

function Home() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    setWeatherData(weather);
  }, [weather]);
  console.log(weatherData);
  // function getDayWeather() {
  //   const dayWeather = weatherData.list;
  //   return dayWeather;
  // }
  const getWeatherData = () => {
    dispatch(getWeather());
  };
  return (
    <div>
      Home container
      {/* {JSON.stringify(weatherData.list[1].dt_txt)} */}
      <button onClick={() => getWeatherData()}>Get weather</button>
      {weatherData.city && <h5>{weatherData.city.name}</h5>}
    </div>
  );
}

export default Home;
