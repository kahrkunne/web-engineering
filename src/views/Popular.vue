<template>
  <div id="popular">
    Let's get some popular
    <select v-model="language">
      <option v-for="lang in languages">{{ lang }}</option>
    </select>
    repositories made in the past
    <select v-model="timeScale">
      <option v-for="scale in timeScales">{{ scale }}</option>
    </select>
    !
    <br>
    <button @click="fetchData">Do it!</button><br>

    <!-- Tutorial: turn this into a component -->
    <div v-for="repo in repos" :key="repo.node_id">
      <a :href="repo.html_url">{{repo.full_name}}</a> - {{repo.stargazers_count}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      request_url: 'https://api.github.com/search/repositories',
      language: 'javascript',
      languages: ['javascript', 'python', 'haskell', 'emacs-lisp'],
      timeScale: 'week',
      timeScales: ['week', 'month', 'year', '5 years', '30 years'],
      // Timescales to day counts
      timeMap: {
        'week': 7,
        'month': 31,
        'year': 365,
        '5 years': 365 * 5,
        '30 years': 365 * 30
      },
      data: {},
    }
  },
  methods: {
    async fetchData() {
      const query = `?q=language:${this.language}+created:>${this.minDate}&sort=stars&order=desc`
      const url = encodeURI(this.request_url + query)
      this.data = await this.axios.get(url)
    }
  },
  computed: {
    minDate() {
      const days = this.timeMap[this.timeScale]
      const date = new Date(new Date().getTime() - (days * 24 * 60 * 60 * 1000));
      // Days and months need to be padded to length 2
      // left-pad anyone? :^)
      const day = ("0" + date.getDate()).slice(-2);
      const month = ("0" + (date.getMonth()+1)).slice(-2);
      const year = date.getFullYear();
      return `${year}-${month}-${day}`
    },
    repos() {
      if (this.data.data) {
        return this.data.data.items
      } else {
        return []
      }
    }
  }
}
</script>
