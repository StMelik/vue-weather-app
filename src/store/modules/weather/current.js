export default {
    namespaced: true,
    getters: {
        getTime(state, getters, rootState) {
            const sec = rootState.weather.current.dt
            const date = new Date(sec * 1000)
            return date.toLocaleString("ru", {hour: 'numeric', minute: 'numeric'})
        },
        getTemperature(state, getters, rootState) {
            const temperature = rootState.weather.current.temp
            return Math.round(temperature)
        },
        getFeelsLikeTemperature(state, getters, rootState) {
            const feelsLikeTemperature = rootState.weather.current['feels_like']
            return Math.round(feelsLikeTemperature)
        },
        getWeatherPressure(state, getters, rootState) {
            const pressure = rootState.weather.current.pressure
            return Math.round(pressure / 1.333)
        },
        getPressureStatus(state, getters, rootState) {
            const pressure = rootState.weather.current.pressure
            return (pressure < 750)
                ? "пониженное"
                : (pressure > 770)
                    ? "повышенное"
                    : "нормальное"
        },
        getWindSpeed(state, getters, rootState) {
            const windSpeed = rootState.weather.current['wind_speed']
            return Math.round(windSpeed)
        },
        getWindRoute(state, getters, rootState) {
            const route = rootState.weather.current['wind_deg']
            if (route > 22 && route <= 67) {
                return "северо-восток"
            } else if (route > 67 && route <= 112) {
                return "восток"
            } else if (route > 112 && route <= 157) {
                return "юго-восток"
            } else if (route > 157 && route <= 202) {
                return "юг"
            } else if (route > 202 && route <= 247) {
                return "юго-запад"
            } else if (route > 247 && route <= 292) {
                return "запад"
            } else if (route > 292 && route <= 337) {
                return "северо-запад"
            } else {
                return "север"
            }
        },
        getWindStatus(state, getters, rootState) {
            const windSpeed = rootState.weather.current['wind_speed']
            if (windSpeed < 0.49) {
                return "штиль"
            } else if (windSpeed < 2) {
                return "тихий ветер"
            } else if (windSpeed < 8) {
                return "слабый ветер"
            } else if (windSpeed < 17) {
                return "сильный ветер"
            } else if (windSpeed < 28) {
                return "шторм"
            } else {
                return "ураган"
            }
        },
        getWeatherCondition(state, getters, rootState) {
            const id = rootState.weather.current.weather[0].id
            if (id < 240) {
                return "Гроза"
            } else if (id < 330) {
                return "Морось"
            } else if (id < 540) {
                return "Дождь"
            } else if (id < 630) {
                return "Снег"
            } else if (id < 790) {
                return "Туман"
            } else {
                return "Без осадков"
            }
        },
        getWeatherIcon(state, getters, rootState) {
            const iconId = rootState.weather.current.weather[0].icon
            return {backgroundImage: `url(http://openweathermap.org/img/wn/${iconId}@2x.png)`}
        }
    }
}
