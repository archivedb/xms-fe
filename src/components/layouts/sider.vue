<template>
  <div class="x-sider">
    <el-menu class="sider-menu" :default-active="activeSiderItem">
      <el-menu-item :index="siderItem.name" v-for="siderItem in siderItems" :key="siderItem.name">
        <router-link :to="`/${siderItem.name}`" tag="div">
          {{ siderItem.name | capitalize }}
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { capitalize } from '../../filters'

export default {
  props: {
    siderItems: { type: Array },
  },
  computed: {
    activeSiderItem() {
      const pathHead = this.$route.path.split('/')[1]
      return pathHead || ''
    },
  },
  filters: {
    capitalize,
  },
}
</script>

<style scoped>
.x-sider .sider-menu {
  height: 720px;
}
</style>
