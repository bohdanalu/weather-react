import React, { useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const searchEl = document.querySelector("#search");
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function showTemp(response) {
    setWeatherData({
      ready: true,
      coordinate: response.data.coord,
      temp: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      descr: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handelSubmit}>
          <input
            className="input-search"
            id="search"
            type="search"
            placeholder="Type a city"
            onChange={getCity}
          />
          <input className="btn-search" type="submit" value="Search" />
        </form>
        <h2>{weatherData.city}</h2>
        <div className="temperature-block">
          <div>
            <CurrentDate date={weatherData.date} />
            <div className="Weather-wrap">
              <WeatherIcon code={weatherData.icon} size={54} />
              <WeatherTemperature celsium={weatherData.temp} />
            </div>
          </div>
          <Temperature
            humidity={weatherData.humidity}
            wind={weatherData.wind}
            descr={weatherData.descr}
          />
        </div>
        <WeatherForecast coordinate={weatherData.coordinate} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
