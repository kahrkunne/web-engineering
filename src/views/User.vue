<template>
  <div>
    Let's take a look at user <input v-model="owner">
    <br>
    <button @click="$router.push(`/user/${owner}/popular`)">Popular Repositories</button>
    <br>
    <input v-model="repo">
    <button @click="$router.push(`/user/${owner}/repo/${repo}`)"><- commits</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      owner: '',
      repo: ''
    }
  }
}
</script>
