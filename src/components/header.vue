<template lang="pug">
  div
    span Level {{level}}
    span Pontuação {{score}}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  computed: mapState({
    score: state => state.score,
    level: state => state.level
  })
}
</script>

<style scoped>
  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    padding: 20px;
    margin: 0 0 20px 0;
    background: bisque;
  }
</style>
