import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handelResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    console.log(forecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <ul>
          <li>
            <span>Thu</span>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecastTempWrap">
              <span className="WeatherForecastTemp-max">19°</span>

              <span className="WeatherForecastTemp-min">10°</span>
            </div>
          </li>
        </ul>
      </div>
    );
  } else {
    const apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
    // let latitude = props.coordinate.lat;
    // let longitude = props.coordinate.lon;
    // let apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${props.city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handelResponse);
    return null;
  }
}
