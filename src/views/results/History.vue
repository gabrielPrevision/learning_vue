<template lang="pug">
  div#history
    h3 History
    ul.historyList
      v-list(three-line)
        template(v-for="result in history")
          v-subheader Score: {{result.score}} - Level {{result.level}} - At:{{result.date}}
  
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'History',
  computed: {
    ...mapState('results',{
      history: state => state.history
    }),
  }
}
</script>

<style scoped>
h3{
  margin-bottom: 30px;
}

.historyList{
  height: 300px;
  overflow-y: scroll;
}
</style>
