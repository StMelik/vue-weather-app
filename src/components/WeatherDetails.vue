<template>
  <div class="weather">
    <div class="weather__now now-weather">
      <div class="now-weather__top">
        <p class="now-weather__top-temp">20°</p>
        <p class="now-weather__top-text">Сегодня</p>
        <p class="now-weather__top-icon"></p>
      </div>
      <div class="now-weather__bottom">
        <p class="now-weather__bottom-text">Время: 21:54</p>
        <p class="now-weather__bottom-text">Город: Санкт-Петербург</p>
      </div>
    </div>
    <div class="weather__details details-weather">
      <div class="details-weather__group">
        <div class="details-weather__icon details-weather__icon-temp"></div>
        <p class="details-weather__title">Температура</p>
        <p class="details-weather__body">20° - ощущается как 17°</p>
      </div>
      <div class="details-weather__group">
        <div class="details-weather__icon details-weather__icon-humidity"></div>
        <p class="details-weather__title">Давление </p>
        <p class="details-weather__body">765 мм ртутного столба - нормальное</p>
      </div>
      <div class="details-weather__group">
        <div class="details-weather__icon details-weather__icon-evaporator"></div>
        <p class="details-weather__title">Осадки</p>
        <p class="details-weather__body">Без осадков</p>
      </div>
      <div class="details-weather__group">
        <div class="details-weather__icon details-weather__icon-wind"></div>
        <p class="details-weather__title">Ветер</p>
        <p class="details-weather__body">3 м/с юго-запад - легкий ветер</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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

/*--------------*/


.details-weather {
  background: #4F4F4F;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 20px;
  padding: 30px 40px;
  width: 750px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.details-weather::before {
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
}

.details-weather__group {
  display: flex;
  column-gap: 20px;
  align-items: center;
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