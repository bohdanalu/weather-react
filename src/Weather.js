import React, { useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [descr, setDescr] = useState(null);
  const key = "ca7fbad26013d3ec86767b6a85456620";

  function updateCity(e) {
    setCity(e.target.value);
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  function handlerSubmit(e) {
    e.preventDefault();
    axios.get(url).then(showTemp);
  }

  function showTemp(response) {
    setTemp(Math.round(response.data.main.temp));
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setDescr(response.data.weather[0].description);
  }

  return (
    <div className="Weather">
      <form onSubmit={handlerSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>

      <Temperature temp={temp} humidity={humidity} wind={wind} descr={descr} />
    </div>
  );
}
