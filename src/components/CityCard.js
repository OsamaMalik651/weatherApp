import React from "react";

const CityCard = ({ citydetails, onClick }) => {
  const { name, state, country } = citydetails;

  const showAlert = () => {
    const selectedCity = citydetails;
    onClick(onClick(selectedCity));
  };

  return (
    <div className="" onClick={showAlert}>
      <span role="button">
        <h6>
          {name} {state}, {country}
        </h6>
      </span>
      <hr className="" />
    </div>
  );
};

export default CityCard;
