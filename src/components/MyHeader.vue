<template>
  <header class="header">
    <img class="header__logo" src="@/assets/images/logo.svg" alt="Логотип">
    <h1 class="header__title">Vue weather</h1>
    <form class="header__form" @submit.prevent="$emit('submitSearchQuery')">
      <input
          type="text"
          class="header__input"
          placeholder="Поиск..."
          :value="searchQuery"
          @input="SET_SEARCH_QUERY($event.target.value)"
          required
      >
      <button class="header__submit"></button>
    </form>
    <button class="header__button"></button>
    <select
        name="city"
        id="city"
        class="header__select"
        :value="selectedCity"
        @change="changeSelect($event.target.value)"
    >
      <option value="" disabled selected>Избранные</option>
      <option
          v-for="city in favoriteCites"
          :key="city"
          :value="city"
      >{{city}}</option>
    </select>
  </header>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations(['SET_SELECTED_CITY', 'SET_SEARCH_QUERY']),

    changeSelect(city) {
      this.SET_SELECTED_CITY(city)
      this.$emit('changeSelect', city)
    }
  },

  computed: {
    ...mapState({
      searchQuery: state => state.searchQuery,
      selectedCity: state => state.selectedCity,
      favoriteCites: state => state.favorite.favoriteCites
    }),
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 10px;
  column-gap: 20px;
}

.header__logo {
  max-width: 65px;
}

.header__title {
  font-size: 25px;
  font-weight: 700;
  color: #4793FF;
  text-transform: uppercase;
}

.header__form {
  display: flex;
  width: 300px;
  margin: 0 auto;
}

.header__input {
  background-color: #4F4F4F;
  color: white;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  border-radius: 10px 0 0 10px;
}

.header__input::placeholder {
  color: #939CB0;
  font-size: 16px;
}

.header__submit {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  background-color: #4F4F4F;
  border-radius: 0 10px 10px 0;
  background-image: url('@/assets/images/search-icon.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 23px 23px;
}

.header__button {
  width: 35px;
  height: 35px;
  background-image: url('@/assets/images/invert-colors.svg');
  background-repeat: no-repeat;
  background-position: center;
}

.header__select {
  padding: 10px 45px 10px 20px;
  background-color: #4F4F4F;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
}
</style>