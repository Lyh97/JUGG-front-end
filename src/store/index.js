import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state: {
    sheet: false,

    large: false,
    dashboard_dialog: false
	},
	mutations: {
        sheetshow(state) {
            state.sheet = !state.sheet
        },
        openlarge(state) {
            state.large = !state.large
        },
        changedashboard_dialog(state) {
            state.dashboard_dialog = !state.dashboard_dialog
        }
	}
})
