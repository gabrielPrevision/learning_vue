export default {
  saveResult(state, resultInformation){
    state.history.push(resultInformation)

    state.ranking.push(resultInformation)

    state.ranking.sort((resultA, resultB) => {
      return resultA.score > resultB.score ? -1 : resultA.score < resultB.score ? 1 : 0;
    })

    state.ranking = state.ranking.splice(0,10)
  }
}
