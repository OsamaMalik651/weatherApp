import React, { useState } from "react";
import { Button } from "reactstrap";
import "../styles/Search.css";
const Search = ({ onClick }) => {
  const [cityName, setCityName] = useState("");
  const handleChange = (event) => {
    setCityName(event.target.value);
  };
  const handleSubmit = () => {
    onClick(cityName);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        className=""
        placeholder="Enter city name to search"
        name="cityName"
        value={cityName}
        onChange={handleChange}
      />
      <Button
        color="success"
        className="searchBar-button"
        onClick={() => handleSubmit()}
      >
        Get weather
      </Button>
    </div>
  );
};

export default Search;
