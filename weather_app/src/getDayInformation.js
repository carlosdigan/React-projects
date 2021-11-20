import getWeekDayIndex from "./getWeekDay"
import getIconURL from "./getIconURL";
import displayTime from "./displayTime";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function getDayInformation(day, first_hour, timezone, dayIndex) { 
    const isToday = dayIndex === 0
    const day_information = {
        temp: day.temp,
        weekday: weekdays[getWeekDayIndex(day.dt)],
        weatherIconURL: getIconURL(day.weather[0].icon),
        maxTemp: Math.round(day.temp.max),
        minTemp: Math.round(day.temp.min),
        sunrise: displayTime(new Date(day.sunrise * 1000), timezone),
        moonrise: displayTime(new Date(day.moonrise * 1000), timezone),
        humidity: day.humidity + "%",
        pop: Math.round(day.pop * 100) + "%",
        wind_speed: day.wind_speed,
        cloudiness: day.clouds + "%",
        feels_like: day.feels_like,
        showGraph: isToday,
        showCurrentTemperature: isToday,
        weatherDescription: isToday ? first_hour.weather[0].main : day.weather[0].main,
        currentTemperature: isToday ? Math.round(first_hour.temp) : null , 
    }

    for (const day_time in day_information.temp) {
        day_information.temp[day_time] = Math.round(day_information.temp[day_time])
        day_information.feels_like[day_time] = Math.round(day_information.feels_like[day_time])     
    }

    return day_information;
}