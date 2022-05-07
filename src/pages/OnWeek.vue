<template>
  <ul class="weather-section week">
    <li class="week__item item-week">
      <p class="item-week__day">Пн</p>
      <p class="item-week__date">28 авг</p>
      <div class="item-week__icon"></div>
      <p class="item-week__max-temp">+18°</p>
      <p class="item-week__min-temp">+15°</p>
      <p class="item-week__weather">Облачно</p>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.week {
column-gap: 20px;
}

.week__item {
  background-color: #2E3035;
  border-radius: 10px;
  width: 150px;
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