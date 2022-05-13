export default {
    methods: {
        time(sec) {
            const date = new Date(sec * 1000)
            return date.toLocaleString("ru", {hour: 'numeric', minute: 'numeric'})
        },
        weatherPressure(pressure) {
            return Math.round(pressure / 1.333)
        },
        pressureStatus(pressure) {
            return (pressure < 750)
                ? "пониженное"
                : (pressure > 770)
                    ? "повышенное"
                    : "нормальное"
        },
        windRoute(route) {
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
        windStatus(windSpeed) {
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
        weatherCondition(id) {
            console.log(id)
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
        weatherIcon(iconId) {
            return {backgroundImage: `url(http://openweathermap.org/img/wn/${iconId}@2x.png)`}
        }
    },
}