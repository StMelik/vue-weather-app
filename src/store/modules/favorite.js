export default {
    namespaced: true,
    state: {
        isFavoriteCity: false,
        favoriteCites: ['Краснодар', 'Москва', 'Перу'],
    },
    mutations: {
        SET_IS_FAVORITE_CITY(state, payload) {
            state.isFavoriteCity = payload
        },
        ADD_FAVORITES_CITES(state, payload) {
            state.favoriteCites.push(payload)
        },
        REMOVE_FAVORITES_CITES(state, payload) {
            state.favoriteCites = state.favoriteCites.filter(city => city !== payload)
        }
    }
}