# web-engineering
## Installation and running
0. Install yarn (https://yarnpkg.com/lang/en/)
1. `yarn install`
2. `yarn serve`

## Tutorial "script"
1. main.js -> dependencies
2. App.vue -> entrypoint
3. router.js (up to /popular) -> routing
4. views/Popular.vue ->
    1. (single-file) component structure
    2. data()
    3. v-model
    4. v-for 
    5. templating
    6. events
    7. computed properties
    8. methods
5. make component for popular repos ->
    1. props
    2. comment on data flow in props; mention v-model, custom events
    3. v-if, class bindings
    3. import component in Popular.vue
6. back to router.js -> dynamic routing
7. User.vue
8. Repo.vue -> mounted(), lifecycle hooks
9. PopularUser.vue
10. Vuex
    1. store.js
    2. Popular.vue
    3. User.vue
    4. Make component that shows favorites

## Further reading
### Official documentation
Vue Guide - https://vuejs.org/v2/guide
Vue Router - https://router.vuejs.org/
Vuex - https://vuex.vuejs.org/
### Tooling
Vue CLI - https://cli.vuejs.org/
Vue devtools - https://github.com/vuejs/vue-devtools
### Ecoysystem
Nuxt - https://nuxtjs.org/

