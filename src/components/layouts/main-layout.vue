<template>
  <div class="x-main-layout">
    <x-header :user="user"/>
    <el-row class="x-body">
      <el-col :span="4">
        <x-sider :siderItems="siderItems"/>
      </el-col>
      <el-col :span="20">
        <slot/>
      </el-col>
    </el-row>
    <x-footer/>
  </div>
</template>

<script>
import XHeader from './header.vue'
import XFooter from './footer.vue'
import XSider from './sider.vue'

export default {
  props: {
    user: Object,
    siderItems: { type: Array, default: () => [] },
  },
  components: {
    XHeader,
    XFooter,
    XSider,
  },
}
</script>
