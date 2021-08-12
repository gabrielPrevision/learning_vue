<template lang="pug">
  div#game
    Header
    wrapperRows
  
</template>

<script>
import WrapperRows from '../components/wrapperRows'
import Header from '../components/header'

export default {
  name: 'App',
  components: {
    Header,
    WrapperRows
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

#game {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  padding: 10px;
  background: rgb(117, 158, 158);
  align-self: center;
}
</style>
