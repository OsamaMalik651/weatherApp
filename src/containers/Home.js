import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import data from "../data.js";
import { getWeather } from "../store/actions/weather";
import { Button } from "reactstrap";

function Home() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    setWeatherData(weather);
  }, [weather]);
  console.log(weatherData);

  const getWeatherData = () => {
    dispatch(getWeather());
  };
  return (
    <div>
      <Button color="primary" onClick={() => getWeatherData()}>
        Get weather
      </Button>
      {weatherData.city && <h5>{weatherData.city.name}</h5>}
    </div>
  );
}

export default Home;
