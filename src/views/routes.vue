<template>
  <main-layout :user="user">
    <div class="routes-view">
      <h2>routes</h2>
      <ul>
        <li v-for="route in routes" v-if="route.component">
          <router-link :to="route.path">
            {{ route.component.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../components/layouts/main-layout.vue'
import { routes } from '../router'

export default {
  name: 'routes-view',
  data: () => ({
    routes,
    user: {
      name: 'U',
    },
  }),
  components: {
    MainLayout,
  },
}
</script>

<style scoped>
.routes-view {
  text-align: center;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
