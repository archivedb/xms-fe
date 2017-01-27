<template>
  <main-layout :user="user">
    <div class="not-found-view">
      <div class="container">
        <div class="content">
          <h1>404</h1>
          <p>Not Found</p>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../components/layouts/main-layout.vue'

export default {
  name: 'not-found-view',
  data: () => ({
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
.container {
  padding-top: 90px;
}

.content {
  color: #666666;
  text-align: center;
}

h1 {
  font-size: 80px;
  margin: 0;
}

p {
  font-size: 14px;
}
</style>
