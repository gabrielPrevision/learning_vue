<template lang="pug">
  div#gameList
    v-btn(
      class="mx-2 backHome"
      fab
      dark
      large
      color="purple"
      @click="goToHome()"
    ) Home
    h1 All games:
    div.containerOptions
      v-btn(
        v-for="game in gameList"
        @click="goToGame(game.path)"
        depressed
        color="primary"
      ) {{game.name}}

    router-view.containerGame
  
</template>

<script>
import gameList from '@/gameList'

export default {
  name: 'GameList',
  computed: {
    gameList(){
      return gameList
    }
  },
  methods: {
    goToGame(gamePath){
      this.$router.push(`/games/${gamePath}`)
    },
    goToHome(){
      this.$router.push(`/`)
    },
  }
}
</script>

<style scoped>

#gameList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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

.containerOptions{
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.containerGame{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gameOption{
  margin-top: 20px;
}
</style>
