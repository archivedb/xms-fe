<template>
  <div class="x-header">
    <el-menu theme="dark" mode="horizontal">
      <el-menu-item index="logo">
        <router-link to="/" tag="div">
          <i class="el-icon-document"/>
          X Management System
        </router-link>
      </el-menu-item>
      <el-submenu index="user" class="user-submenu">
        <template slot="title">
          <i class="el-icon-loading"/>
          {{ user.name }}
        </template>
        <el-menu-item index="settings">
          <router-link to="/user/settings" tag="div">
            <i class="el-icon-setting"/>
            Setting
          </router-link>
        </el-menu-item>
        <el-menu-item index="logout">
          <div @click="handleLogout">
            <i class="el-icon-close"/>
            Logout
          </div>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  methods: {
    handleLogout() {
      // TODO
    },
  },
}
</script>

<style scoped>
.x-header .user-submenu {
  float: right;
}

.x-header .user-submenu .el-menu-item {
  text-align: center;
}
</style>
