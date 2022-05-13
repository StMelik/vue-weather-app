import {createStore} from 'vuex'
import favorite from "@/store/modules/favorite";
import weather from "@/store/modules/weather/weather";

export default createStore({
    state: {
        cityName: 'Краснодар',
        isLoading: true,
        searchQuery: '',
        selectedCity: ''
    },
    mutations: {
        SET_LOADING(state, payload) {
            state.isLoading = payload
        },
        SET_CITY_NAME(state, payload) {
            state.cityName = payload
        },
        SET_SELECTED_CITY(state, payload) {
            state.selectedCity = payload
        },
        SET_SEARCH_QUERY(state, payload) {
            state.searchQuery = payload
        }
    },
    modules: {
        favorite,
        weather
    }
})
