<template>
  <div class="home">
    <h2>routes</h2>
    <ul>
      <li><router-link to="/hello">hello</router-link></li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
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
