import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="WeatherTemperature-temp">
        {props.celsium}
        <span className="WeatherTemperature-unit">°C</span>
      </span>
    </div>
  );
}
