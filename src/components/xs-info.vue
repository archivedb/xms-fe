<template>
  <div class="xs-info">
    <el-table
      :data="xs"
      style="width: 100%"
      default-sort-prop="id"
      default-sort-order="descending"
    >
      <el-table-column
        prop="id"
        label="ID"
        sortable
      >
        <template scope="scope">
          <router-link :to="`/dashboard/x/${scope.row.id}`" tag="div">
            {{ scope.row.id }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column
        v-for="prop in schemaProps"
        :key="prop"
        :prop="prop"
        :label="prop | capitalize"
      />
      <el-table-column
        prop="updateTime"
        label="Update Time"
        width="180"
        sortable
      >
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ new Date(scope.row.createTime).toLocaleString() }}</p>
            <div slot="reference">
              <el-tag>{{ scope.row.createTime.slice(0, 10) }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { capitalize } from '../filters'
import X from '../entities/x'

export default {
  props: {
    xs: Array,
  },
  computed: {
    schemaProps() {
      return Object.keys(X.default).filter(k => k !== 'id' && !k.endsWith('Time'))
    },
  },
  filters: {
    capitalize,
  },
}
</script>
