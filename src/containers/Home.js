import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  clearWeatherData,
  getCity,
  getWeather,
  setSelectedCity,
} from "../store/actions/weather";
import City from "../components/City.js";
import DayCard from "../components/DayCard.js";
import Search from "../components/Search.js";
import "../styles/Home.css";
import { getDaysWithHourlyDetails } from "../constants";
import { getDateFromMs } from "../constants/dateFunctions";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import CityCard from "../components/CityCard";

function Home() {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weather);
  const city = useSelector((state) => state.city);
  const selectedCity = useSelector((state) => state.selectedCity);
  const searchedTerm = useSelector((state) => state.searchedTerm);

  const [weatherData, setWeatherData] = useState(weather);
  const [currentCity, setCurrentCity] = useState(selectedCity);
  const [searchTerm, setSearchTerm] = useState(searchedTerm);

  const [cityElements, setCityElements] = useState([]);
  const [dayArrayElements, setDayArrayElements] = useState([]);

  // Modal open state
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setWeatherData(weather);
  }, [weather]);

  useEffect(() => {
    if (searchTerm && currentCity && selectedCity) {
      makeDayElements(weatherData);
    }
  }, [weatherData]);

  useEffect(() => {
    if (Object.keys(selectedCity).length === 0) {
      dispatch(clearWeatherData());
      return;
    }
  }, [dispatch, selectedCity]);

  useEffect(() => {
    if (!Object.keys(selectedCity).length) {
      if (city.length < 2) {
        const cityForWeather = city[0];
        if (cityForWeather) {
          const lat = cityForWeather.lat;
          const lon = cityForWeather.lon;
          dispatch(getWeather(lat, lon));
          setCurrentCity(cityForWeather);
          dispatch(setSelectedCity(selectedCity));
        }
      } else if (city.length) {
        makeCityElements(city);
        toggle();
      }
    }
  }, [city]);

  const toggle = () => setModal((prevState) => !prevState);

  const getWeatherData = () => {
    if (searchTerm) {
      dispatch(getCity(searchTerm));
      dispatch(setSelectedCity({}));
    }
  };

  const selectCity = useCallback((selectedCity) => {
    if (selectedCity) {
      const { lat, lon } = selectedCity;
      dispatch(getWeather(lat, lon));
      dispatch(setSelectedCity(selectedCity));
      setCurrentCity(selectedCity);

      toggle();
    }
  });

  const makeCityElements = useCallback(
    (city) => {
      const citiesArray = city.map((city, index) => (
        <CityCard key={index} citydetails={city} onClick={selectCity} />
      ));
      setCityElements(citiesArray);
      return;
    },
    [selectCity]
  );

  const makeDayElements = useCallback((weatherData) => {
    if (weatherData.daily) {
      const daysWithHourlyDetails = getDaysWithHourlyDetails(
        weatherData.hourly
      );
      const daysArray = weatherData.daily.map((day) => {
        let date = getDateFromMs(day.dt);
        let dayWithLink = daysWithHourlyDetails.includes(date)
          ? { ...day, isActive: true }
          : { ...day, isActive: false };
        return dayWithLink;
      });
      setDayArrayElements(daysArray);
    }
  }, []);
  return (
    <div className="home">
      <Search
        searchForCity={(event) => getWeatherData(event)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {cityElements.length ? (
        <div>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>
              <p className="fw-bolder fs-2 mb-0 mt-0">Select City</p>
            </ModalHeader>
            <ModalBody>{cityElements}</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Dismiss
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      ) : (
        ""
      )}

      <div className="city-current-weather">
        {weatherData.current && (
          <City
            name={currentCity.name}
            country={currentCity.country}
            state={currentCity.state}
            currentWeather={weatherData.current}
          />
        )}
      </div>

      {weatherData.daily.length > 0 ? (
        <div className="daily-weather shadow">
          {dayArrayElements.map((day, index) => (
            <DayCard
              key={index}
              day={day}
              city={currentCity}
              isActive={day.isActive}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
