import React from "react";
import { getTimefromMS } from "../constants/dateFunctions";
import "../styles/City.css";
import "../styles/weather-icons.min.css";
import { LINKS } from "../constants";

const City = ({ currentWeather, name, state, country }) => {
  const { sunrise, sunset, temp, feels_like, weather } = currentWeather;

  const sunrise_time = getTimefromMS(sunrise);
  const sunSet_time = getTimefromMS(sunset);

  const todayWeather = weather[0].main;
  const weatherIcon = weather[0].icon;
  const iconURL = LINKS.iconURL.path;

  return (
    <div className="city">
      <span style={{ textAlign: "center" }}>
        <h1>{name}</h1>
        <h6>
          {state}, {country}
        </h6>
      </span>

      <h5>Weather: {todayWeather}</h5>
      <i>
        {" "}
        <img src={`${iconURL}${weatherIcon}@2x.png`} alt="weather icon" />
      </i>
      <div className="">
        <h5>Temperature {temp} &#8451;</h5>
        <h5>Feels like {feels_like} &#8451;</h5>
      </div>
      <div className="">
        <h5>Sunrise {sunrise_time}</h5>
        <h5>Sunset {sunSet_time}</h5>
      </div>

      <p></p>
    </div>
  );
};

export default City;
