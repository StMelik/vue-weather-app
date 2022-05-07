<template>
  <MyHeader/>
  <WeatherDetails/>
  <NavBar/>
  <OnWeek/>
</template>

<script>
// import a from "@/assets/images/small-rain-sun.svg"
import MyHeader from "@/components/MyHeader";
import WeatherDetails from "@/components/WeatherDetails";
import NavBar from "@/components/NavBar";
import OnWeek from "@/pages/OnWeek";
export default {
  components: {NavBar, WeatherDetails, MyHeader, OnWeek}
}
</script>

<style>
.weather-section {
  background-color: #4F4F4F;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 0px 0px 20px 20px;
  padding: 20px;
  display: flex;
}
</style>