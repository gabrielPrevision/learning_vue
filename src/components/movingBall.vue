<template lang="pug">
div(
  :class="isPointBall ? 'pointBall' : 'loseMatchBall'",
  v-on:mousedown="$emit('hitBall')",
  v-bind:style="{ left: `${left}%` }",
  :key="`ball_${Math.random()}`"
)
</template>

<script>
export default {
  name: 'MovingBall',
  props: {
    isPointBall: {
        type: Boolean,
        default: () => false
    },
    speed: {
        type: Number,
        default: () => 1
    }
  },
  data(){
      return {
          left: 0
      }
  }, 
  methods: {
    goToRight(){
      const leftToRightIdInterval = setInterval(() => {
          if(this.left == 90) {
              clearInterval(leftToRightIdInterval)
              this.goToleft()
          }   

          this.left++
      },200/this.speed);
    },
    goToleft(){
      const rightToLeftIdInterval = setInterval(() => {
          if(this.left == 0) {
              clearInterval(rightToLeftIdInterval)
              this.goToRight()
          }

          this.left--
      }, 200/this.speed);
    }
  },
  created(){
    this.goToRight()
  }
}
</script>

<style scoped>
div {
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 50%;
  position: absolute;
}

.pointBall {
  background: green;
}

.loseMatchBall {
  background: red;
  z-index: 1;
}
</style>
