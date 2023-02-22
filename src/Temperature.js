import React from "react";
import "./Temperature.css";

export default function Weather(props) {
  if (props.temp) {
    return (
      <div className="Temperature">
        <h1>{props.city}</h1>
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
}
