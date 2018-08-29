import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state: {
    sheet: false,
    dashboard_dialog:false
	},
	mutations: {
        sheetshow(state) {
            state.sheet = !state.sheet
        },
        changedashboard_dialog(state) {
            state.dashboard_dialog = !state.dashboard_dialog
        }
	}
})
