<template lang="pug">
  v-app
    v-content
      div#wrapperAll
        router-view
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
*{
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#wrapperAll{
  height: 100vh;
  width: 600px;
  background: rgb(209 230 230);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: auto;
}
</style>
