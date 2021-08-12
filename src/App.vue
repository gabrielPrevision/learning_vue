<template lang="pug">
  div#app
    Header
    wrapperRows
  
</template>

<script>
import WrapperRows from './components/wrapperRows'
import Header from './components/header'

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  padding: 10px;
  background: rgb(117, 158, 158);
  align-self: center;
}
</style>
