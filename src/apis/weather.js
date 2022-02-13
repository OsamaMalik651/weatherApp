import axios from "axios";

const { REACT_APP_APP_ID } = process.env;
const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: REACT_APP_APP_ID,
  },
});

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={6aa99e7ed05e0c81c4e743d589f8a7da}
export default instance;
