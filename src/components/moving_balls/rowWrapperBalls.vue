<template lang="pug">
  div.wrapperBalls
    MovingBall(
        v-for="ballConfig in ballList"
        :isPointBall="ballConfig.isPointBall"
        :speed="ballConfig.speed"
        v-on:hitBall="ballConfig.isPointBall ? hitRightBall($event) : hitWrongBall($event)"
    )
  
</template>

<script>
import { mapMutations, mapState } from 'vuex'
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
    ...mapState('movingBalls',{
      level: state => state.level,
      score: state => state.score
    }),
    ...mapState('results',{
      history: state => state.history,
    }),
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

      if(this.hits === this.ballsNumber) this.$emit('completeRow')

      if(this.level > 10) {
        this.finishMatch()
        console.log(this.history)
        alert('Você venceu')
      }
    },
    hitWrongBall(){
      this.hits = 0
      this.dificult = 1
      this.finishMatch()
      alert('Você perdeu!')
    },
    finishMatch(){
      const todayDate = new Date()

      const resultInfo = {
        level: this.level,
        score: this.score,
        date: `${todayDate.getDate().toString()}/${(todayDate.getMonth()+1).toString()}/${todayDate.getFullYear()}`
      }
      this.restartGame()
      this.saveResult(resultInfo)
    },
    ...mapMutations('movingBalls',{toScore: 'toScore', completeRow: 'completeRow', restartGame: 'restartGame'}),
    ...mapMutations('results',{saveResult: 'saveResult'})
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
