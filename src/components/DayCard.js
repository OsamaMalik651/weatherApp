import React from "react";
import {
  getDateFromMs,
  getDayName,
  getTimefromMS,
} from "../constants/dateFunctions";
import "../styles/DayCard.css";
import { LINKS } from "../constants";
import {
  Card,
  CardBody,
  CardColumns,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { Link, Outlet } from "react-router-dom";

const DayCard = ({ day, isActive }) => {
  const dayName = getDayName(day.dt);
  const date = getDateFromMs(day.dt);
  const time = getTimefromMS(day.dt);
  const weather = day.weather[0];
  const iconURL = LINKS.iconURL.path;

  return (
    <Card
      className="m-2 shadow dayCard"
      outline
      color="dark"
      id="weatherDesciption"
    >
      <Link
        to={isActive ? `/${dayName}` : "#"}
        className={`${!isActive ? "dayCard--inactive" : "dayCard--link"}`}
      >
        <CardBody className="text-center">
          <CardTitle tag="h2" className="fw-bold m-1">
            {dayName}
          </CardTitle>
          <CardSubtitle className="d d-flex justify-content-around m-3">
            <CardColumns>{date}</CardColumns>
            <CardColumns>{time}</CardColumns>
          </CardSubtitle>
          <CardText className="d d-flex justify-content-between mt-2 m-1">
            <CardColumns>Temp: {day.temp.day}</CardColumns>
            <CardColumns className="p-1">
              <h6>Max : {day.temp.max}&#8451;</h6>
              <h6>Min : {day.temp.min}&#8451;</h6>
            </CardColumns>
          </CardText>
          <CardText className="d d-flex justify-content-around align-items-center mt-3">
            <CardColumns>
              <img
                src={`${iconURL}${weather.icon}@2x.png`}
                alt="weather icon"
              />
            </CardColumns>
            <CardColumns className="d d-flex flex-column justify-content-around m-1">
              <h4 className="fw-bold">{weather.main}</h4>
              <h6>{weather.description}</h6>
            </CardColumns>
          </CardText>
        </CardBody>
      </Link>
      <Outlet />
    </Card>
  );
};

export default DayCard;
