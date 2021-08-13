export default {
  toScore(state){
    state.score++
  },
  completeRow(state){
    state.completedRowsNumber++

    if(state.completedRowsNumber == state.level) state.level++
  },
  restartGame(state){
    state.score = 0
    state.completedRowsNumber = 0
    state.level = 1
    state.initiated = false
  },
  initiate(state){
    state.initiated = true
  },
}
