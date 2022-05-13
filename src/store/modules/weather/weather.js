import fetchWeather from "@/utils/fetchWeather";
import fetchCoordinates from "@/utils/fetchCoordinates";
import current from "@/store/modules/weather/current";

export default {
    namespaced: true,
    state: {
        current: null,
        daily: null,
    },
    mutations: {
        SET_WEATHER(state, {current, daily}) {
            state.current = current
            state.daily = daily
        }
    },
    actions: {
        async fetchWeather({commit}, payload) {
            try {
                const weather = await fetchWeather(payload)
                commit('SET_WEATHER', weather.data)
                commit('SET_LOADING', false, { root: true })
            } catch (err) {
                console.log(err)
            }
        },
        async fetchCoordinates({dispatch}, payload) {
            try {
                const cityLocation = await fetchCoordinates(payload)
                dispatch('fetchWeather', cityLocation.data[0])
            } catch (err) {
                console.log(err)
            }
        }
    },
    modules: {
        current
    }
}
