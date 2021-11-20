import React from "react"
import Week from "./Week";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";
import "./style/css/App.css"
import DayForecast from "./DayForecast";

function App() {
    return (
        <Routes>
            <Route path="/home" element={<Week/>}/>
            <Route path="/" element={<Search/>}/>   
            <Route path="/:Weekday" element={<DayForecast/>}/>
        </Routes>
    )
}

export default App
