<template lang="pug">
  div#ranking
    h3 Ranking
    ul.rankingList
      v-list(three-line)
        template(v-for="(result, index) in ranking")
          v-subheader {{index+1}}º - Score: {{result.score}} - Level {{result.level}} - At:{{result.date}}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Ranking',
  computed: {
    ...mapState('results',{
      ranking: state => state.ranking
    }),
  }
}
</script>

<style scoped>
h3{
  margin-bottom: 30px;
}

.rankingList{
  height: 300px;
  overflow-y: scroll;
}
</style>