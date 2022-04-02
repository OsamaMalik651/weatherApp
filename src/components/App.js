import "../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import * as links from "../constants/index";
import About from "./About";
import HourlyWeather from "../containers/HourlyWeather";

function App() {
  const { home, about, hourly } = links.LINKS;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home.path} exact element={<Home />}></Route>
        <Route path={hourly.path} element={<HourlyWeather />} />
        {/* Below component just for checking */}
        <Route path={about.path} exact element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
