<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/popular">Popular</router-link> |
      <router-link to="/user">User</router-link> |
    </div>

    <!-- Router puts page components (views) here -->
    <router-view />
  </div>
</template>

<style>
 /* This style will apply to everything */
</style>
