import React from "react";
import getWeekDayIndex from "./getWeekDay.js"
import getIconURL from "./getIconURL.js";
import { Link } from "react-router-dom";

export default function Day({day, hourly, timezone, index}) {
    const shorthandWeekday = shorthandWeekdays[getWeekDayIndex(day.dt)]
    const weekday = weekdays[getWeekDayIndex(day.dt)]
    const weatherIconURL = getIconURL(day.weather[0].icon)
    const maxTemp = Math.round(day.temp.max)
    const minTemp = Math.round(day.temp.min)
    
    return (
        <Link to={"/" + weekday} state={{day, hourly, timezone, index}}>
            <div className="day">
                <h3 className="day__weekday">{shorthandWeekday}</h3>
                <img className="day__weather__icon" src={weatherIconURL} alt=""></img>
                <div className="day__temperatures__wrapper">
                    <div className="day__max__temp">High: {maxTemp}°</div>
                    <div className="day__min__temp">Low: {minTemp}°</div>
                </div>
            </div>
        </Link>
    )
}

const shorthandWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];