import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <ul>
        <li className="descr">
          <strong>{props.descr}</strong>
        </li>
        <li>
          Humidity: <strong>{props.humidity}</strong> %
        </li>
        <li>
          Wind: <strong>{props.wind}</strong> km/h
        </li>
      </ul>
    </div>
  );
}
