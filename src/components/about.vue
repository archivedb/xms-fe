<template>
  <div class="about">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data: () => ({
    message: 'this is a vue app',
  }),
}
</script>

<style scoped>
p {
  text-align: center;
  color: #42b983;
}
</style>
