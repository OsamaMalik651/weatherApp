import React from "react";
import {
  getDateFromMs,
  getDayName,
  getTimefromMS,
} from "../constants/dateFunctions";

import { LINKS } from "../constants";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const DayCard = ({ day }) => {
  const dayName = getDayName(day.dt);
  const date = getDateFromMs(day.dt);
  const time = getTimefromMS(day.dt);
  const weather = day.weather[0];
  const iconURL = LINKS.iconURL.path;
  return (
    <Card
      body
      outline
      color="dark"
      style={{
        "min-width": "15rem",
        "min-height": "20rem",
      }}
      className=" m-2 p-1 d d-flex align-items-center justify-content-center text-center shadow"
    >
      <CardBody className="d d-flex flex-column align-items-center">
        <CardSubtitle>
          <CardTitle tag="h2">{dayName}</CardTitle>
          <Row xs="1" md="2">
            <Col>
              <h6>{date}</h6>
            </Col>
            <Col>
              <h6>{time}</h6>
            </Col>
          </Row>
        </CardSubtitle>
        <CardText>
          <Row xs="1" md="2">
            <Col>
              <h6> Temp: {day.temp.day}&#8451;</h6>
            </Col>
            <Col>
              <h6>Max : {day.temp.max}&#8451;</h6>
              <h6>Min : {day.temp.min}&#8451;</h6>
            </Col>
          </Row>
          <Row xs="1" md="2">
            <Col>
              <img
                src={`${iconURL}${weather.icon}@2x.png`}
                alt="weather icon"
              />
            </Col>
            <Col className="align-self-end">
              <h4>{weather.main}</h4>
              <p>{weather.description}</p>
            </Col>
          </Row>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default DayCard;
