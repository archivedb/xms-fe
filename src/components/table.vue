<template>
  <div class="table">
    <el-table
      :data="tableData"
      style="width: 100%"
      default-sort-prop="date"
      default-sort-order="descending"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        sortable
      />
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      />
      <el-table-column
        prop="address"
        label="地址"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'table',
  data: () => ({
    tableData: [{
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄',
    }, {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
    }],
  }),
}
</script>

<style scoped>
</style>
