import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Popular from './views/Popular.vue'
import User from './views/User.vue'
import PopularUser from './views/PopularUser.vue'
import Repo from './views/Repo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/popular',
      name: 'popular',
      component: Popular
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/user/:user/popular',
      name: 'popular user repos',
      component: PopularUser
    },
    {
      path: '/user/:user/repo/:repo',
      name: 'repo info',
      component: Repo
    }
  ]
})
