import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'
import MovingBalls from './store/moving_balls'
import Results from './store/results'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store({
  modules: {
    movingBalls: MovingBalls,
    results: Results,
  },
  plugins: [vuexLocal.plugin]
})

export default store;
