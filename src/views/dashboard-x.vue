<template>
  <main-layout :user="user" :sider-items="siderItems">
    <div class="dashboard-x-view">
      <pre>{{ x | inspect }}</pre>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../components/layouts/main-layout.vue'
import { inspect } from '../filters'
import XService from '../services/x'
import X from '../entities/x'

export default {
  name: 'dashboard-x-view',
  data: () => ({
    x: X.default,
    siderItems: [
      { name: 'dashboard' },
    ],
    user: {
      name: 'U',
    },
  }),
  computed: {
    xId() {
      return this.$route.params.id
    },
  },
  methods: {
    async syncXInfo(xId) {
      this.x = await XService.getById(xId)
    },
  },
  created() {
    this.syncXInfo(this.xId)
  },
  filters: {
    inspect,
  },
  components: {
    MainLayout,
  },
}
</script>

<style scoped>
.dashboard-x-view {
  margin-top: 30px;
}
</style>
