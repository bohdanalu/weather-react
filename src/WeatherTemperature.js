import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsium");
  function showCelsium(e) {
    e.preventDefault();
    setUnit("celsium");
  }
  function showFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "celsium") {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{props.celsium}</span>
        <a className="active" href="/">
          °C
        </a>
        /
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round((props.celsium * 9) / 5 + 32)}</span>
        <a href="/" onClick={showCelsium}>
          °C
        </a>
        /
        <a href="/" className="active">
          °F
        </a>
      </div>
    );
  }
}
