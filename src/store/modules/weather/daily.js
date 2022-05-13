
export default {
    namespaced: true,
    state: {
        weather: null,
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
}

//
// import fetchWeather from "@/utils/fetchWeather";
// import fetchCoordinates from "@/utils/fetchCoordinates";
// import current from "@/store/modules/weather/current";
//
// export default {
//     namespaced: true,
//     state: {
//         current: null,
//         daily: null,
//     },
//     getters: {
//         getCurrentWeather(state) {
//             return state.current
//         }
//     },
//     mutations: {
//         SET_CURRENT_WEATHER(state, payload) {
//             state.current = payload
//         },
//         SET_DAILY_WEATHER(state, payload) {
//             state.daily = payload
//         },
//
//     },
//     actions: {
//         async fetchWeather({commit}, payload) {
//             try {
//                 const weather = await fetchWeather(payload)
//                 commit('SET_CURRENT_WEATHER', weather.data.current)
//                 commit('SET_DAILY_WEATHER', weather.data.daily)
//                 commit('SET_LOADING', false, { root: true })
//                 console.log(weather)
//             } catch (err) {
//                 console.log(err)
//             }
//         },
//         async fetchCoordinates({dispatch}, payload) {
//             try {
//                 const cityLocation = await fetchCoordinates(payload)
//                 dispatch('fetchWeather', cityLocation.data[0])
//             } catch (err) {
//                 console.log(err)
//             }
//         }
//     },
//     modules: {
//         current
//     }
// }
