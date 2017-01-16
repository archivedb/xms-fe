<template>
  <div class="home">
    <h2>routes</h2>
    <ul>
      <li v-for="route in routes">
        <router-link :to="route.path">
          {{ route.component.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from '../router'

export default {
  name: 'home',
  data: () => ({
    routes,
  }),
}
</script>

<style scoped>
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
