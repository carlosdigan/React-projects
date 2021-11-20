import React, { useState } from "react";
import { useNavigate } from "react-router";
export default function Search() {
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    return (
            <div id="search">
                <h1 id="search__heading">Search for a place</h1>
                <form onSubmit={e => 
                    {e.preventDefault();
                    setStatus("Searching ...")
                    getWeather(location, navigate, setStatus)}}
                id="search__form">

                    <input id="search__searchbar" type="text"
                    value={location}
                    onChange={e => {
                        setLocation(e.target.value)
                    }}></input>
                        
                    <input id="search__submit" type="submit" value="Go"></input>
                </form>
                <h1>{status}</h1>
            </div>
    )
}

async function getWeather(location, navigate, setStatus) {
    const params = new URLSearchParams({limit: 1, access_token: geocodeAPIKey});
    const geolocateURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?`
    let geoResponse = await fetch(geolocateURL + params);
    let geoResponseJSON = await geoResponse.json();

    if (!geoResponseJSON.features.length) {
        setStatus("Error, could not locate place.")
        navigate("/")
        return;
    }

    console.log(geoResponseJSON);
    const [lon, lat] = geoResponseJSON.features[0].center;
    const weathermapURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units=${units}&appid=${API_KEY}`;
    const weatherResponse = await fetch(weathermapURL);
    const weatherResponseJSON = await weatherResponse.json();
    let place = geoResponseJSON.features[0].place_type[0] === "poi" ? 
    geoResponseJSON.features[0].text : geoResponseJSON.features[0].place_name;
    weatherResponseJSON.location = place //Location's name
    navigate("/home", {state: weatherResponseJSON})
}

const API_KEY = "0fb25522985200e280fb1b2c8e699c92";
const geocodeAPIKey = "pk.eyJ1IjoibG9uZG9ub3JnIiwiYSI6ImNrbDJqaTF6cDFkdHYycHFvdzFsNXNzZzgifQ.Fr8mIbTpHD38Vxhzqg_gUA"
const units = "metric";
const exclude = ["current", "minutely", "alerts"].join(",")
