import React from "react";
import { getTimefromMS } from "../constants/dateFunctions";
import "../styles/weather-icons.min.css";
import { LINKS } from "../constants";
import { Card, Col, Row } from "reactstrap";

const City = ({ currentWeather, name, state, country }) => {
  const { sunrise, sunset, temp, feels_like, weather } = currentWeather;

  const sunrise_time = getTimefromMS(sunrise);
  const sunSet_time = getTimefromMS(sunset);

  const todayWeather = weather[0].main;
  const weatherIcon = weather[0].icon;
  const iconURL = LINKS.iconURL.path;

  return (
    <Card className="shadow border border-dark">
      <Row className="d d-flex align-items-center text-center">
        <Col>
          <h1>{name}</h1>
          <h6>
            {state}, {country}
          </h6>
        </Col>
        <Col className="d d-flex align-items-center justify-content-between">
          <h5>Weather: {todayWeather}</h5>
          <i>
            {" "}
            <img src={`${iconURL}${weatherIcon}@2x.png`} alt="weather icon" />
          </i>
        </Col>
        <Col>
          {" "}
          <h5>Temperature {temp} &#8451;</h5>
          <h5>Feels like {feels_like} &#8451;</h5>
        </Col>
        <Col>
          {" "}
          <h5>Sunrise {sunrise_time}</h5>
          <h5>Sunset {sunSet_time}</h5>
        </Col>
      </Row>
    </Card>
  );
};

export default City;
