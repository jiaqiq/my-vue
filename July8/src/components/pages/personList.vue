<template>
  <div id="personList">
      <el-table
      height="480"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        header-align="center"
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        header-align="center"
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        align="left"
        header-align="center"
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
    tableData: []
    };
  },
  mounted() {
      this.getPersonList();
  },
  methods: {
      getPersonList() {
          this.$http('/api/personList').then(res => {
              console.log(111, res)
              this.tableData = res.data.tableData;
          })
      }
  }
};
</script>

<style lang="scss" scoped>
#personList {
    margin-top: 10px;
}
</style>

