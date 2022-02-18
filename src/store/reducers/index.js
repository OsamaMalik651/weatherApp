import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import weatherReducer from "./weatherReducer";

export default combineReducers({
  weather: weatherReducer,
  city: cityReducer,
});
