<template>
  <MyHeader
      @submitSearchQuery="submitSearchQuery"
  />
  <WeatherDetails
      @changeFavoriteStatus="handleFavoriteStatus"
  />
  <NavBar/>
  <OnWeek/>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import WeatherDetails from "@/components/WeatherDetails";
import NavBar from "@/components/NavBar";
import OnWeek from "@/pages/OnWeek";
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
      SET_IS_FAVORITE_CITY: 'favorite/SET_IS_FAVORITE_CITY',
      REMOVE_FAVORITES_CITES: 'favorite/REMOVE_FAVORITES_CITES',
      ADD_FAVORITES_CITES: 'favorite/ADD_FAVORITES_CITES'
    }),

    async fetchWeather(city) {
      this.SET_LOADING(true)
      this.SET_CITY_NAME(city)
      await this.fetchCoordinates(city)
    },

    async submitSearchQuery() {
      await this.fetchWeather(this.searchQuery)
      this.SET_SEARCH_QUERY("")
    },

    checkIsFavoriteCity(city) {
      if (this.favoriteCites.includes(city)) {
        this.SET_IS_FAVORITE_CITY(true)
      } else {
        this.SET_IS_FAVORITE_CITY(false)
      }
    },

    handleFavoriteStatus() {
      if (this.isFavoriteCity) {
        this.SET_IS_FAVORITE_CITY(false)
        this.REMOVE_FAVORITES_CITES(this.cityName)
      } else {
        this.SET_IS_FAVORITE_CITY(true)
        this.ADD_FAVORITES_CITES(this.cityName)
      }
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
    this.fetchWeather(this.cityName);
    this.checkIsFavoriteCity(this.cityName)
  },

  watch: {
    selectedCity(newCity) {
      this.fetchWeather(newCity)
    },

    cityName(newCity) {
      this.checkIsFavoriteCity(newCity)
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