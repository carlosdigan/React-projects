import React from "react";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from "recharts";

export default function DayForecastGraph({showGraph, hourly_data}) {
    return (
        <>
        {showGraph && 
            <ResponsiveContainer width="90%" height={350}>
                <LineChart margin={{ top: 0, left: -30, right: 0, bottom: 0 }}
                className="day__forecast__graph" data={hourly_data}>                 
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>}
        </>
    )
}