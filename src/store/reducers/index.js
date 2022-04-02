import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import searchTermReducer from "./searchTermReducer";
import selectedCityReducer from "./selectedCityReducer";
import weatherReducer from "./weatherReducer";

export default combineReducers({
  weather: weatherReducer,
  city: cityReducer,
  selectedCity: selectedCityReducer,
  searchedTerm: searchTermReducer,
});
