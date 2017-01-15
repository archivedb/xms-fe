<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ message }}</h1>
    <h2>essential links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">core docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">gitter chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">docs for this template</a></li>
    </ul>
    <h2>ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data: () => ({
    message: 'welcome to your vue app',
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
