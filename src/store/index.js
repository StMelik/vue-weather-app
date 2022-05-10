import {createStore} from 'vuex'
import fetchWeather from "@/utils/fetchWeather";
import fetchCoordinates from "@/utils/fetchCoordinates";

export default createStore({
    state: {
        isLoading: true
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
