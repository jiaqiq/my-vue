<template>
  <div id="pagination">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 25, 50, 100, 200]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: Number
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      // this.listData = Object.assign([],this.allList).splice((val-1)*this.pageSize, this.pageSize);
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
    };
  }
};
</script>

<style lang="scss" scoped>
#pagination {
  padding: 9px 5px;
}
</style>


