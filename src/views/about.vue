<template>
  <div class="about-view">
    <img src="../assets/vue.png">
    <h1>{{ message }}</h1>
    <h2>essential links</h2>
    <ul>
      <li><a href="https://vuejs.org/v2/api" target="_blank">vue-api</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">gitter</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">twitter</a></li>
    </ul>
    <h2>ecosystem</h2>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank">vuex</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'about-view',
  data: () => ({
    message: 'about vue',
  }),
}
</script>

<style scoped>
.about-view {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
