<template>
  <li class="week__item item-week">
    <p class="item-week__day">{{ dayWeek }}</p>
    <p class="item-week__date">{{ date }}</p>
    <div class="item-week__icon" :style="weatherIcon"></div>
    <p class="item-week__max-temp">{{ maxTemperature }}°</p>
    <p class="item-week__min-temp">{{ minTemperature }}°</p>
    <p class="item-week__weather">{{ weatherCondition }}</p>
  </li>
</template>

<script>
import {mapState} from "vuex";

export default {
  props: {
    dayWeather: Object
  },

  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
    }),

    maxTemperature() {
      return Math.round(this.dayWeather.temp.max)
    },

    minTemperature() {
      return Math.round(this.dayWeather.temp.min)
    },

    date() {
      const date = new Date(this.dayWeather.dt * 1000)
      return date.toLocaleString("ru", {day: 'numeric', month: 'short'})
    },

    dayWeek() {
      const date = new Date(this.dayWeather.dt * 1000)
      const dayWeek = date.toLocaleString("ru", {weekday: 'short'})
      return dayWeek[0].toUpperCase() + dayWeek.slice(1)
    },

    weatherCondition() {
      const id = this.dayWeather.weather[0].id
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

    weatherIcon() {
      const iconId = this.dayWeather.weather[0].icon
      return {backgroundImage: `url(http://openweathermap.org/img/wn/${iconId}@2x.png)`}
    }

  },
}
</script>

<style scoped>

.week__item {
  background-color: #2E3035;
  border-radius: 10px;
  width: calc(950px / 7);
  padding: 10px;
  text-align: left;
}

.item-week__max-temp,
.item-week__day {
  font-weight: 500;
  font-size: 18px;
}

.item-week__day {
  margin-bottom: 7px;
}

.item-week__date {
  font-size: 14px;
  color: #939CB0;
  margin-bottom: 12px;
}

.item-week__icon {
  width: 48px;
  height: 48px;
  background-image: url("@/assets/images/small-rain-sun.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 13px;
}

.item-week__max-temp {

}

.item-week__weather,
.item-week__min-temp {
  font-size: 13px;
  color: #939CB0;
}

.item-week__min-temp {
  margin-bottom: 6px;
}

.item-week__weather {

}
</style>