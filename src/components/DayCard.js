import React from "react";
import {
  getDateFromMs,
  getDayName,
  getTimefromMS,
} from "../constants/dateFunctions";

import "../styles/dayCard.css";
import { LINKS } from "../constants";
import {
  Card,
  CardBody,
  CardHeader,
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
    <div className="dayCard">
      <h2>{dayName}</h2>
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
          <img src={`${iconURL}${weather.icon}@2x.png`} alt="weather icon" />
        </div>

        <div className="dayCard-bottom-right">
          <h4>{weather.main}</h4>
          <p>{weather.description}</p>
        </div>
      </div>
    </div>

    // <Card
    //   body
    //   style={{
    //     "min-width": "15rem",
    //     "min-height": "20rem",
    //     "box-shadow": "0px 0px 5px #000",
    //   }}
    //   className=" m-2 p-1  d d-flex align-items-center justify-content-center text-center"
    // >
    //   <CardBody>
    //     <CardTitle tag="h2">{dayName}</CardTitle>
    //     <CardSubtitle>
    //       <Row xs="1" md="2">
    //         <Col>
    //           <h6>{date}</h6>
    //         </Col>
    //         <Col>
    //           <h6>{time}</h6>
    //         </Col>
    //       </Row>
    //     </CardSubtitle>
    //     <CardText>
    //       <Row xs="1" md="2">
    //         <Col>
    //           <h6> Temp: {day.temp.day}&#8451;</h6>
    //         </Col>
    //         <Col>
    //           <h6>Max : {day.temp.max}&#8451;</h6>
    //           <h6>Min : {day.temp.min}&#8451;</h6>
    //         </Col>
    //       </Row>
    //       <Row
    //         xs="1"
    //         md="2"
    //         className="d d-flex align-items-center justify-content-center"
    //       >
    //         <Col>
    //           <img
    //             src={`${iconURL}${weather.icon}@2x.png`}
    //             alt="weather icon"
    //           />
    //         </Col>
    //         <Col className="align-self-end">
    //           <h4>{weather.main}</h4>
    //           <p>{weather.description}</p>
    //         </Col>
    //       </Row>
    //     </CardText>
    //   </CardBody>
    // </Card>
  );
};

export default DayCard;
