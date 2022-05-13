import {createStore} from 'vuex'
import fetchWeather from "@/utils/fetchWeather";
import fetchCoordinates from "@/utils/fetchCoordinates";

export default createStore({
    state: {
        isLoading: true,
        isFavoriteCity: false,
        favoriteCites: ['Краснодар', 'Москва', 'Перу']
    },
    getters: {
        getCurrentWeather(state) {
            return state.weather.current
        },
        getIsLoading(state) {
            return state.isLoading
        },
        getCityName(state) {
            return state.cityName
        },
        getFavoriteCites(state) {
            return state.favoriteCites
        },
        getIsFavoriteCites(state) {
            return state.isFavoriteCity
        }
    },
    mutations: {
        SET_WEATHER(state, payload) {
            state.weather = payload
        },
        SET_LOADING(state, payload) {
            state.isLoading = payload
        },
        SET_CITY_NAME(state, payload) {
            state.cityName = payload
        },
        SET_IS_FAVORITE_CITY(state, payload) {
            state.isFavoriteCity = payload
        },
        ADD_FAVORITES_CITES(state, payload) {
            state.favoriteCites.push(payload)
        },
        REMOVE_FAVORITES_CITES(state, payload) {
            state.favoriteCites = state.favoriteCites.filter(city => city !== payload)
        },
    },
    actions: {

        async fetchWeather({commit}, payload) {
            try {
                const weather = await fetchWeather(payload)
                commit('SET_WEATHER', weather.data)
                commit('SET_LOADING', false)
                console.log(weather.data.current)
            } catch (err) {
                console.log(err)
            }

        },
        async fetchCoordinates({dispatch}, payload) {
            const cityLocation = await fetchCoordinates(payload)
            dispatch('fetchWeather', cityLocation.data[0])
        }
    },
    modules: {}
})
