<template lang="pug">
  div#notFound
    button.gameOption(
      @click="goToHome()"
    ) Home
    h1 What you are looking for, is not here
  
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goToHome(){
      this.$router.push(`/`)
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

#notFound {
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
