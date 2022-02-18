import React, { useState } from "react";
import { Button, Card, CardBody, Input } from "reactstrap";
const Search = ({ onSearchButtonClick }) => {
  const [cityName, setCityName] = useState("");
  const handleChange = (event) => {
    setCityName(event.target.value);
  };
  const handleSubmit = () => {
    onSearchButtonClick(cityName);
  };

  return (
    <Card style={{ width: "80vw" }} outline color="dark">
      <CardBody className="d d-flex justify-content-around">
        <Input
          className="m-2 w-75"
          placeholder="Enter city name to search"
          name="cityName"
          value={cityName}
          onChange={handleChange}
        />
        <Button
          color="success"
          outline
          className="fw-bold mw-auto"
          onClick={handleSubmit}
        >
          Get Weather
        </Button>
      </CardBody>
    </Card>
  );
};

export default Search;
