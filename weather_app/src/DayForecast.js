import React from "react";
import { Navigate, useLocation } from "react-router";
import getDayInformation from "./getDayInformation"
import displayTime from "./displayTime";
import DayForecastInformation from "./DayForecastInformation";
import DayForecastGraph from "./DayForecastGraph";


export default function DayForecast() {
    const location = useLocation();
    if (!location.state)
        return <Navigate to="/"></Navigate>

    let day = location.state.day;
    const timezone = location.state.timezone;
    const hourly = location.state.hourly;
    const dayIndex = location.state.index;
    const first_hour = hourly[0];
    const hourly_data = hourly.map(hour_data => (
        {hour: displayTime(new Date(hour_data.dt * 1000), timezone),
        temperature: Math.round(hour_data.temp)}
        ))
    
    day = getDayInformation(day, first_hour, timezone, dayIndex);

    return (
        <>
        <div className="day__forecast">
            <div className="grid__day__forecast__top">

                    <div className="day__weekday__time">
                        <h3 className="day__weekday">{day.weekday}</h3>
                        {day.showCurrentTemperature && 
                        <h3 className="day__forecast__current__temperature">{day.currentTemperature}°</h3>}  
                    </div>         
         
               
                    <div className="day__weather__description">{day.weatherDescription}</div>
                    <img className="day__forecast__weather__icon" src={day.weatherIconURL} alt=""></img>
         
     
                    <div>High:</div>
                    <div>Low:</div>
                    <div className="day__max__temp">{day.maxTemp}°</div>
                    <div className="day__min__temp">{day.minTemp}°</div>
                    <img className="day__sunrise__icon" src={sunrise_icon_url} alt=""/>
                    <img className="day__moonrise__icon" src={moonrise_icon_url} alt=""/>
                    <span className="day__sunrise__time">{day.sunrise}</span>
                    <span className="day__moonrise__time">{day.moonrise}</span>     
            </div>
            <DayForecastInformation day={day}/>
            <DayForecastGraph showGraph={day.showGraph} hourly_data={hourly_data}/>
        </div>
        </>
    )
}

const sunrise_icon_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRu2YWEEVtmR8QuNgJl_vvSVeKLltUbcvZQ&usqp=CAU"
const moonrise_icon_url = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-15-512.png"




