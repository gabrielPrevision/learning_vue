<template lang="pug">
  div#results
    v-btn(
      class="mx-2 backHome"
      fab
      dark
      large
      color="purple"
      @click="goToHome()"
    ) Home
    
    h1 Results

    div.containerOptions
      v-btn(
        depressed
        color="primary"
        class="resultOption"
        @click="goToRanking()"
      ) Ranking
      v-btn(
        depressed
        color="primary"
        @click="goToHistory()"
        class="resultOption"
      ) History
    router-view.resultBody
  
</template>

<script>
export default {
  name: 'Results',
  methods: {
    goToHome(){
      this.$router.push(`/`)
    },
    goToRanking(){
      this.$router.push(`/results/ranking`)
    },
    goToHistory(){
      this.$router.push(`/results/history`)
    },
  }
}
</script>

<style>

#results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  padding: 10px;
}

h1{
  margin: 40px;
}

.backHome{
  position: absolute;
  left: 20px;
  top: 20px;
}

.resultOption{
  margin: 10px;
}

.resultBody{
  margin-top: 40px;
}
</style>
