import axios from "axios";

export default function fetchWeather({lat, lon}) {
    return axios.get('data/2.5/onecall', {
        baseURL: 'http://api.openweathermap.org',
        params: {
            units: "metric",
            appid: "0e1fb26ff399f8f120e1a62839be4f02",
            exclude: "minutely,hourly,alerts",
            lat,
            lon
        }
    })
}