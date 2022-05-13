<template>
  <div class="container">
    <MyHeader
        @submitSearchQuery="submitSearchQuery"
        @changeSelect="handleSelectCity"
    />
    <WeatherDetails
        @changeFavoriteStatus="handleFavoriteStatus"
    />
    <NavBar/>
    <OnWeek/>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import WeatherDetails from "@/components/WeatherDetails";
import NavBar from "@/components/NavBar";
import OnWeek from "@/components/WeekWeather";
import {mapState, mapActions, mapMutations} from "vuex";

export default {
  components: {NavBar, WeatherDetails, MyHeader, OnWeek},

  methods: {
    ...mapActions({
      fetchCoordinates: 'weather/fetchCoordinates',
    }),
    ...mapMutations({
      SET_LOADING: 'SET_LOADING',
      SET_CITY_NAME: 'SET_CITY_NAME',
      SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
      SET_SELECTED_CITY: 'SET_SELECTED_CITY',
      SET_IS_FAVORITE_CITY: 'favorite/SET_IS_FAVORITE_CITY',
      REMOVE_FAVORITES_CITES: 'favorite/REMOVE_FAVORITES_CITES',
      ADD_FAVORITES_CITES: 'favorite/ADD_FAVORITES_CITES',
      LOAD_FAVORITE_CITES: 'favorite/LOAD_FAVORITE_CITES'
    }),

    async fetchWeather(city) {
      const cityName = city[0].toUpperCase() + city.slice(1)
      this.SET_LOADING(true)
      this.SET_CITY_NAME(cityName)
      await this.fetchCoordinates(cityName)
    },

    async submitSearchQuery() {
      await this.fetchWeather(this.searchQuery)
      this.SET_SEARCH_QUERY("")
    },

    checkIsFavoriteCity(city) {
      if (this.favoriteCites.includes(city)) {
        this.SET_IS_FAVORITE_CITY(true)
        this.SET_SELECTED_CITY(city)
      } else {
        this.SET_IS_FAVORITE_CITY(false)
        this.SET_SELECTED_CITY('')
      }
    },

    handleFavoriteStatus() {
      if (this.isFavoriteCity) {
        this.SET_IS_FAVORITE_CITY(false)
        this.REMOVE_FAVORITES_CITES(this.cityName)
        localStorage.setItem('favoriteSites', JSON.stringify(this.favoriteCites))
        this.SET_SELECTED_CITY('')
      } else {
        this.SET_IS_FAVORITE_CITY(true)
        this.ADD_FAVORITES_CITES(this.cityName)
        localStorage.setItem('favoriteSites', JSON.stringify(this.favoriteCites))
        this.SET_SELECTED_CITY(this.cityName)
      }
    },

    handleSelectCity(newCity) {
      this.fetchWeather(newCity)
    }
  },

  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      selectedCity: state => state.selectedCity,
      searchQuery: state => state.searchQuery,
      cityName: state => state.cityName,
      isFavoriteCity: state => state.favorite.isFavoriteCity,
      favoriteCites: state => state.favorite.favoriteCites,
    }),
  },

  created() {
    if (localStorage.getItem('favoriteSites')) {
      this.LOAD_FAVORITE_CITES(JSON.parse(localStorage.getItem('favoriteSites')))
    }
    this.fetchWeather(this.cityName);
    this.checkIsFavoriteCity(this.cityName)
  },

  watch: {
    cityName(newCity) {
      this.checkIsFavoriteCity(newCity)
    }
  }
}
</script>

<style>
@import url('./assets/fonts/fonts.css');

* {
  box-sizing: border-box;
}

body {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #111111;
  line-height: 1.22;
}

body,
h1,
h2,
p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

button {
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  display: block;
}

img {
  width: 100%;
  display: block;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

.weather-section {
  background-color: #4F4F4F;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 0px 0px 20px 20px;
  padding: 20px;
  position: relative;
}

.disabled-button {
  opacity: .2;
  cursor: default;
}

</style>
