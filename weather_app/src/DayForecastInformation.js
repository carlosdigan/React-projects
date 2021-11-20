import React from "react";

export default function DayForecastInformation({day}) {
    return (
        <div className="grid__day__forecast__information">
                <div className="day__forecast__information__item day__forecast__humidity">
                    <span className="day__forecast__information__title">Humidity:</span> 
                    <span className="day__forecast__information__value">{day.humidity}</span>
                </div>
                <div className="day__forecast__information__item day__forecast__pop">
                    <span className="day__forecast__information__title">Chance of rain:</span> 
                    <span className="day__forecast__information__value">{day.pop}</span>
                </div>
                <div className="day__forecast__information__item day__forecast__wind_speed">
                    <span className="day__forecast__information__title">Wind speed:</span> 
                    <span className="day__forecast__information__value">{day.wind_speed}</span>
                </div>
                <div className="day__forecast__information__item day__forecast__cloudiness">
                    <span className="day__forecast__information__title">Cloudiness:</span> 
                    <span className="day__forecast__information__value">{day.cloudiness}</span>
                </div>
                <div className="day__forecast__information__item day__forecast__morning__temperature">
                    <span className="day__forecast__information__title">Morning:</span> 
                    <span className="day__forecast__information__value">{day.temp.morn}°</span>
                </div>
                <div className="day__forecast__information__item day__forecast__day__temperature">
                    <span className="day__forecast__information__title">Day:</span> 
                    <span className="day__forecast__information__value">{day.temp.day}°</span>
                </div>
                <div className="day__forecast__information__item day__forecast__evening__temperature">
                    <span className="day__forecast__information__title">Evening:</span> 
                    <span className="day__forecast__information__value">{day.temp.eve}°</span>
                </div>
                <div className="day__forecast__information__item day__forecast__night__temperature">
                    <span className="day__forecast__information__title">Night:</span> 
                    <span className="day__forecast__information__value">{day.temp.night}°</span>
                </div>
                <div className="day__forecast__information__item day__forecast__feels__like__morning__temperature">
                    <span className="day__forecast__information__title">Feels like:</span> 
                    <span className="day__forecast__information__value">{day.feels_like.morn}°</span>
                </div>
                <div className="day__forecast__information__item day__forecast__feels__like__day__temperature">
                    <span className="day__forecast__information__title">Feels like:</span> 
                    <span className="day__forecast__information__value">{day.feels_like.day}°</span>
                </div>
                <div className="day__forecast__information__item day__forecast__feels__like__evening__temperature">
                    <span className="day__forecast__information__title">Feels like:</span> 
                    <span className="day__forecast__information__value">{day.feels_like.eve}°</span>
                </div>
                <div className="day__forecast__information__item day__forecast__feels__like__night__temperature">
                    <span className="day__forecast__information__title">Feels like:</span> 
                    <span className="day__forecast__information__value">{day.feels_like.night}°</span>
                </div>        
            </div>
    )
}