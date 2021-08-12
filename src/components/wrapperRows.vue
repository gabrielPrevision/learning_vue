<template lang="pug">
    div#container
      div.wrapperRows
        RowWrapperBalls(
          v-for="n in level <= 5 ? level : 5"
          :key="`row_${n == 1 ? firstId : n}`"
        )
      div.wrapperRows(v-if="useSecondWrapper")
        RowWrapperBalls(
          v-for="n in level - 5"
          :key="`row_${n + 5}`"
        )
</template>

<script>
import RowWrapperBalls from './rowWrapperBalls.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'WrapperRows',
  components: {
    RowWrapperBalls
  },
  data(){
    return {
      firstId: Math.random()
    }
  },
  computed: {
    ...mapState({
      level: state => state.level,
      initiated: state => state.initiated
    }),
    useSecondWrapper(){
      return this.level > 5
    }
  },
  methods: {
    ...mapMutations({initiate: 'initiate'})
  },
  watch: {
    initiated: function () {
      this.initiate()
      this.firstId = Math.random()
    }
  },
  created(){
    this.initiate()
  }
}
</script>

<style>
  #container{
    position: relative;
    width: 100%;
    height: 500px;
  }
  .wrapperRows{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .wrapperRows:nth-child(2){
    transform: rotate(90deg);
  }
</style>
