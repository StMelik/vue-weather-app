<template>
  <div class="weather-section week">
    <MyPreloader
        v-if="isLoading"
        :style="{transform: 'translate(-50%, 0) scale(0.8)'}"
    />
    <ul v-else class="week">
      <WeekItem
        v-for="dayWeather in dailyWeatherList"
        :dayWeather="dayWeather"
        :key="dayWeather.dt"
      />
    </ul>
  </div>
</template>

<script>
import WeekItem from "@/components/WeekItem";
import {mapState} from "vuex";
import MyPreloader from "@/components/MyPreloader";

export default {
  components: {MyPreloader, WeekItem},

  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      dailyWeatherList: state => state.weather.daily
    })
  },

}
</script>

<style scoped>
.week {
  display: flex;
  column-gap: 20px;
}

</style>