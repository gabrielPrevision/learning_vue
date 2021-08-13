<template lang="pug">
  div#home
    h1 Ball Games
    div.containerButtons
      v-btn(
        depressed
        color="primary"
        @click="goToGameList"
      ) Games
      v-btn(
        depressed
        color="primary"
        @click="goToResults"
      ) Results
    
  
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToGameList(){
      this.$router.push('/games')
    },
    goToResults(){
      this.$router.push('/results')
    }
  }
}
</script>

<style scodep>
#home {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background: rgb(209 230 230);
}

.containerButtons{
  display: flex;
  justify-content: space-around;
  margin: 60px 0;
}
</style>
