import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state: {
    sheet: false
	},
	mutations: {
    sheetshow(state) {
      state.sheet = !state.sheet
    }
	}
})
