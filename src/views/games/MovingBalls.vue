<template lang="pug">
  div#game
    Header
    wrapperRows
  
</template>

<script>
import WrapperRows from '@/components/moving_balls/wrapperRows'
import Header from '@/components/moving_balls/header'

export default {
  name: 'App',
  components: {
    Header,
    WrapperRows
  }
}
</script>

<style scoped>

#game {
  margin-top: 20px;
  display: flex;
  width: 100%;
  padding: 10px;
  background: rgb(117, 158, 158);
  align-self: center;
}
</style>
