<template lang="pug">
  div.wrapperBalls
    MovingBall(
        v-for="ballConfig in ballList"
        v-bind:isPointBall="ballConfig.isPointBall"
        v-bind:speed="ballConfig.speed"
        v-on:hitBall="ballConfig.isPointBall ? hitRightBall($event) : hitWrongBall($event)"
    )
  
</template>

<script>
import { mapMutations } from 'vuex'
import MovingBall from './movingBall'

export default {
  name: 'RowWrapperBalls',
  components: {
    MovingBall
  },
  data(){
    return {
      dificult: 1,
      ballsNumber: Math.ceil(Math.random() * 5),
      hits: 0
    }
  },
  computed: {
    ballList(){
          const ballConfigList = []

          for(let counter = 0; counter < this.ballsNumber; counter++){
              ballConfigList.push({
                  isPointBall: counter < this.ballsNumber - this.hits ? true : false,
                  speed: this.dificult * Math.random() * 5
              })
          }

          return ballConfigList
    }
  },
  methods: {
    hitRightBall(){
        this.hits++

        this.dificult++

        this.toScore()

        if(this.hits === this.ballsNumber) this.completeRow()
    },
    hitWrongBall(){
      this.restartGame()
      alert('Você perdeu!')
    },
    ...mapMutations({toScore: 'toScore', completeRow: 'completeRow', restartGame: 'restartGame'})
  },
}
</script>

<style>
.wrapperBalls {
  width: 100%;
  height: 60px;
  align-self: center;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
  margin: 10px 0;
}
</style>
