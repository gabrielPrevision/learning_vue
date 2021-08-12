import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    score: 0,
    level: 1,
    completedRowsNumber: 0,
    initiated: false
  },
  mutations: {
    toScore(state){
      state.score++
    },
    completeRow(state){
      state.completedRowsNumber++

      if(state.completedRowsNumber == state.level) state.level++

      if(state.level > 10) {
        alert('Você venceu')
        state.level = 1
        state.initiated = false
      }
    },
    restartGame(state){
      state.level = 1
      state.initiated = false
    },
    initiate(state){
      state.initiated = true
    },
  }
})

export default store;
