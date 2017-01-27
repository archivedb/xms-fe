<template>
  <main-layout :user="user" :sider-items="siderItems">
    <div class="dashboard-xs-view">
      <el-row :gutter="20">
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="20">
          <div class="title">
            <h3>Dashboard</h3>
          </div>
          <br/>
          <div class="search-bar">
            <el-input placeholder=".." v-model="inputValue">
              <div slot="prepend" class="input-label">ID</div>
              <el-button slot="append" class="input-label" @click="handleSearchX">
                <i class="el-icon-search"/>
              </el-button>
            </el-input>
          </div>
          <br/>
          <div class="xs-info-container" v-if="x.id">
            <el-card class="box-card">
              <div slot="header">X Info</div>
              <xs-info :xs="[x]"/>
            </el-card>
          </div>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
      </el-row>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../components/layouts/main-layout.vue'
import XsInfo from '../components/xs-info.vue'
import XService from '../services/x'
import X from '../entities/x'

export default {
  name: 'dashboard-xs-view',
  data: () => ({
    inputValue: '',
    x: X.default,
    siderItems: [
      { name: 'dashboard' },
    ],
    user: {
      name: 'U',
    },
  }),
  methods: {
    async handleSearchX() {
      this.x = await XService.getById(this.inputValue)
    },
  },
  components: {
    MainLayout,
    XsInfo,
  },
}
</script>

<style scoped>
.dashboard-xs-view {
  margin-top: 30px;
}

.title {
  color: #324057;
}

.input-label {
  text-align: center;
  width: 90px;
}
</style>
