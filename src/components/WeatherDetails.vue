<template>
  <div class="weather">
    <div class="weather__now now-weather">
      <MyPreloader v-if="isLoading" />
      <div v-else class="now-weather__wrapper">
        <div class="now-weather__top">
          <p class="now-weather__top-temp">{{ temperature }}°</p>
          <p class="now-weather__top-text">Сегодня</p>
          <p class="now-weather__top-icon" :style="weatherIcon"></p>
        </div>
        <div class="now-weather__bottom">
          <p class="now-weather__bottom-text">Время: {{ time }}</p>
          <div class="now-weather__city-box">
            <p class="now-weather__bottom-text">Город: {{ cityName }}</p>
            <button
                class="now-weather__city-button"
                :class="isFavoriteCity && 'now-weather__city-button_active'"
                @click="$emit('changeFavoriteStatus')"
            ></button>
          </div>
        </div>
      </div>
    </div>
    <div class="weather__details details-weather">
      <MyPreloader v-if="isLoading" />
      <div v-else class="details-weather__wrapper">
        <div class="details-weather__group">
          <div class="details-weather__icon details-weather__icon-temp"></div>
          <p class="details-weather__title">Температура</p>
          <p class="details-weather__body">{{ temperature }}° - ощущается как {{ feelsLikeTemperature }}°</p>
        </div>
        <div class="details-weather__group">
          <div class="details-weather__icon details-weather__icon-humidity"></div>
          <p class="details-weather__title">Давление </p>
          <p class="details-weather__body">{{ pressure }} мм ртутного столба - {{ pressureStatus }}</p>
        </div>
        <div class="details-weather__group">
          <div class="details-weather__icon details-weather__icon-evaporator"></div>
          <p class="details-weather__title">Осадки</p>
          <p class="details-weather__body">{{ weatherCondition }}</p>
        </div>
        <div class="details-weather__group">
          <div class="details-weather__icon details-weather__icon-wind"></div>
          <p class="details-weather__title">Ветер</p>
          <p class="details-weather__body">{{ windSpeed }} м/с {{ windRoute }} - {{ windStatus }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
import MyPreloader from "@/components/MyPreloader";

export default {
  components: {MyPreloader},

  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      cityName: state => state.cityName,
      isFavoriteCity: state => state.favorite.isFavoriteCity,
      favoriteCites: state => state.favorite.favoriteCites
    }),
    ...mapGetters({
      time: 'weather/current/getTime',
      temperature: 'weather/current/getTemperature',
      feelsLikeTemperature: 'weather/current/getFeelsLikeTemperature',
      pressure: 'weather/current/getWeatherPressure',
      pressureStatus: 'weather/current/getPressureStatus',
      windSpeed: 'weather/current/getWindSpeed',
      windRoute: 'weather/current/getWindRoute',
      windStatus: 'weather/current/getWindStatus',
      weatherCondition: 'weather/current/getWeatherCondition',
      weatherIcon: 'weather/current/getWeatherIcon',
    }),
  }
}
</script>

<style scoped>
.weather {
  display: flex;
  justify-content: space-between;
  column-gap: 50px;
  margin-bottom: 50px;
}

.now-weather {
  background-color: #4F4F4F;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
  padding: 20px;
  width: 400px;
  position: relative;
}

.now-weather__top {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'temp icon'
    'text icon';
  align-items: center;
  margin-bottom: 30px;
}

.now-weather__top-temp {
  font-weight: 500;
  font-size: 96px;
  color: #4793FF;
  grid-area: temp;
}

.now-weather__top-text {
  font-size: 40px;
  grid-area: text;
}

.now-weather__top-icon {
  width: 120px;
  height: 120px;
  background-image: url("@/assets/images/sun.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  justify-self: end;
  grid-area: icon;
}

.now-weather__bottom {

}

.now-weather__bottom-text {
  font-size: 25px;
  color: #939CB0;
  text-align: left;
}

.now-weather__bottom-text:not(:last-of-type) {
  margin-bottom: 15px;
}

.now-weather__city-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;
  margin-top: 15px;
}

.now-weather__city-button {
  width: 30px;
  height: 30px;
  background-image: url("@/assets/images/star-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

.now-weather__city-button_active {
  background-image: url("@/assets/images/star-active-icon.svg");
}

/*--------------*/


.details-weather {
  background-color: #4F4F4F;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
  padding: 30px 40px;
  width: 750px;
  position: relative;
  overflow: hidden;
}

.details-weather__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.details-weather::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 460px;
  height: 200px;
  background-image: url("@/assets/images/cloud-image.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: brightness(0.7);
}

.details-weather__group {
  display: flex;
  column-gap: 20px;
  align-items: center;
  /*position: relative;*/
  z-index: 5;
}

.details-weather__group:not(:last-child) {
  margin-bottom: 25px;
}

.details-weather__icon {
  background-color: #FFFFFF;
  box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
}

.details-weather__icon-temp {
  background-image: url("@/assets/images/thermometer.svg");
  background-size: 25px 25px;
}

.details-weather__icon-humidity {
  background-image: url("@/assets/images/humidity.svg");
  background-size: 19px 19px;
}

.details-weather__icon-evaporator {
  background-image: url("@/assets/images/evaporator.svg");
  background-size: 25px 25px;
}

.details-weather__icon-wind {
  background-image: url("@/assets/images/wind.svg");
  background-size: 20px 20px;
}

.details-weather__title {
  font-size: 14px;
  color: #939CB0;
  width: 100px;
  text-align: left;
}

.details-weather__body {
  font-size: 14px;
  color: #FFFFFF;
}
</style>