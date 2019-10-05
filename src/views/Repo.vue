<template>
  <div>
    <!-- Tutorial: finish -->
    {{ data }}
  </div>
</template>
<script>
export default {
  data() {
    const user = this.$route.params.user
    const repo = this.$route.params.repo
    return {
      user,
      repo,
      request_url: encodeURI(`https://api.github.com/repos/${user}/${repo}/commits`),
      data: null
    }
  },
  async mounted() {
    this.data = await this.axios.get(this.request_url)
  }
}
</script>
