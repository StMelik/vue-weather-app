<template>
  <MyHeader
      v-model:search="searchQuery"
      v-model:select="selectedCity"
      @submit="submit"
  />
<!--  <div v-if="!isLoading">-->
    <WeatherDetails/>
    <NavBar/>
    <OnWeek/>
<!--  </div>-->
<!--  <h2 class="loader" v-else>Загрузка...</h2>-->
</template>

<script>
import MyHeader from "@/components/MyHeader";
import WeatherDetails from "@/components/WeatherDetails";
import NavBar from "@/components/NavBar";
import OnWeek from "@/pages/OnWeek";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {NavBar, WeatherDetails, MyHeader, OnWeek},

  data() {
    return {
      searchQuery: "",
      selectedCity: ""
    }
  },
  methods: {
    ...mapActions(['fetchCoordinates']),
    async fetchWeather(city) {
      this.$store.commit('SET_LOADING', true)
      this.$store.commit('SET_CITY_NAME', city)
      await this.fetchCoordinates(city)
    },
    async submit() {
      await this.fetchWeather(this.searchQuery)
      this.searchQuery = ""
    }
  },
  computed: {
    ...mapGetters(['getIsLoading']),
    isLoading() {
      return this.getIsLoading
    }
  },
  created() {
    this.fetchWeather("Краснодар")
  },
  watch: {
    selectedCity(newCity) {
      this.fetchWeather(newCity)
    }
  }
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

.loader {
  font-size: 84px;
}
</style>