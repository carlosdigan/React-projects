import React from "react";
import Day from "./Day"
import {useLocation, Navigate } from "react-router-dom";

export default function Week() {
    const location = useLocation();
    const week = location.state;

    if (!week)   
        return <Navigate to="/"></Navigate>
    
    const city = week.location 
    return (
        <>
        <h1 id="city">{city}</h1>
        <div className="week">
            {week.daily.map((day, index) => <Day key={day.dt} {...{day, timezone: week.timezone, index, hourly: week.hourly.slice(0,24)}}/>)}
        </div>
        </>
    )
}