<template>
  <div>
    <!-- Tutorial: favourites -->
    <template v-for="(repo, i) in repos">
      <div :key="i">
        {{ i }} - {{ repo.full_name }} ({{ repo.stargazers_count }})
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    const user = this.$route.params.user
    return {
      user,
      request_url: encodeURI(`https://api.github.com/users/${user}/repos`),
      data: null
    }
  },
  async mounted() {
    this.data = await this.axios.get(this.request_url)
  },
  computed: {
    repos() {
      if (!this.data) {
        return []
      } else {
        return this.data.data.sort((a, b) => b.stargazers_count - a.stargazers_count)
      }
    }
  }
}
</script>
