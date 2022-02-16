import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";
import React from "react";
import {
  getDateFromMs,
  getDayName,
  getTimefromMS,
} from "../constants/functions";
import { getWeather } from "../store/actions/weather";
import "../styles/dayCard.css";

const DayCard = ({ day }) => {
  const dayName = getDayName(day.dt);
  const date = getDateFromMs(day.dt);
  const time = getTimefromMS(day.dt);
  const weather = day.weather[0];
  return (
    <div className="dayCard">
      <h1>{dayName}</h1>
      <div className="dayCard-top">
        <h6>{date}</h6>
        <h6>{time}</h6>
      </div>
      <div className="dayCard-middle">
        <h6> Temp: {day.temp.day}&#8451;</h6>
        <div className="">
          <h6>Max : {day.temp.max}&#8451;</h6>
          <h6>Min : {day.temp.min}&#8451;</h6>
        </div>
      </div>
      <div className="dayCard-bottom">
        <div className="dayCard-bottom-left">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="weather icon"
          />
        </div>

        <div className="dayCard-bottom-right">
          <h4>{weather.main}</h4>
          <p>{weather.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
