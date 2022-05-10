import axios from "axios";

export default function fetchCoordinates(q) {
    return axios.get('/geo/1.0/direct', {
        baseURL: 'https://api.openweathermap.org',
        params: {
            appid: "0e1fb26ff399f8f120e1a62839be4f02",
            limit: '1',
            q
        }
    })
}