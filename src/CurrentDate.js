import React from "react";
import "./CurrentDate.css";

export default function CurrentDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div className="CurrentDate">
      <p>
        {days[props.date.getDay()]} {hour}
        {":"}
        {minute}
      </p>
    </div>
  );
}
