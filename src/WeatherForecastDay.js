import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = new Date(props.data.dt * 1000).getDay();
  function RounndMax() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function RounndMin() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }
  return (
    <div className="WeatherForecastDay">
      <span>{days[day]}</span>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecastDay-wrap">
        <span className="WeatherForecastDay-max">{RounndMax()}</span>
        <span className="WeatherForecastDay-min">{RounndMin()}</span>
      </div>
    </div>
  );
}
