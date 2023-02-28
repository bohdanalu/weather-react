import React, { useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";
import CurrentDate from "./CurrentDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const searchEl = document.querySelector("#search");
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity);
  let [ready, setReady] = useState(false);

  function showTemp(response) {
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      descr: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  function search() {
    const key = "ca7fbad26013d3ec86767b6a85456620";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    axios.get(url).then(showTemp);
  }

  function handelSubmit(e) {
    e.preventDefault();
    search();
    searchEl.value = "";
  }

  function getCity(e) {
    setCity(e.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handelSubmit}>
          <input
            id="search"
            type="search"
            placeholder="Type a city"
            onChange={getCity}
          />
          <input type="submit" value="Search" />
        </form>
        <h2>{city}</h2>
        <CurrentDate date={weatherData.date} />
        <WeatherIcon code={weatherData.icon} />
        <Temperature
          temp={weatherData.temp}
          humidity={weatherData.humidity}
          wind={weatherData.wind}
          descr={weatherData.descr}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
