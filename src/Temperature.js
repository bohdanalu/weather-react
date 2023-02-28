import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <ul>
        <li>
          Temperature: <strong>{props.temp}</strong> °C
        </li>
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
