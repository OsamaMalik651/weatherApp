import React from "react";
import { Col, Row } from "reactstrap";
import { LINKS } from "../constants";

const HourlyCard = ({ hour }) => {
  const { main, icon, description } = hour.weather[0];
  const iconURL = LINKS.iconURL.path;
  return (
    <>
      <Row className="d-flex align-items-center text-center" xs="3" sm="5">
        <Col>{hour.dt}</Col>
        <Col>{hour.temp} &#8451;</Col>
        <Col>
          {" "}
          <img
            src={`${iconURL}${icon}@2x.png`}
            alt="weather icon"
            width="48rem"
          />
        </Col>
        <Col>{main}</Col>
        <Col>{description}</Col>
      </Row>
    </>
  );
};

export default HourlyCard;
