import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <strong>
        <WeatherTemperature celsium={props.temp} />
      </strong>
      <ul>
        <li>
          Humidity: <strong>{props.humidity}</strong> %
        </li>
        <li>
          Wind: <strong>{props.wind}</strong> km/h
        </li>
        <li>
          Description: <strong>{props.descr}</strong>
        </li>
      </ul>
    </div>
  );
}
