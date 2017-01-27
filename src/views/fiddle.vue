<template>
  <main-layout :user="user">
    <div class="fiddle-view">
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../components/layouts/main-layout.vue'

export default {
  name: 'fiddle-view',
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
