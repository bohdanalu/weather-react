import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handelResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinate.lat}&lon=${props.coordinate.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinate]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <ul>
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <li key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    load();
    return null;
  }
}
