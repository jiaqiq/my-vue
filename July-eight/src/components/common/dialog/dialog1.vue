<template>
  <div class="box">
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="id" label="id" width="200" header-align="center"></el-table-column>
        <el-table-column property="name" label="姓名" width="200" header-align="center"></el-table-column>
        <el-table-column property="age" label="年龄" width="200" header-align="center"></el-table-column>
        <el-table-column property="teacher" label="老师" header-align="center"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import gridData from '../../../../static/js/table.js'
export default {
  props: {
    show: {
      default: false,
      type: Boolean
    }
  },
  watch: {
    show: function(val) {
      this.dialogTableVisible = true;
    }
  },

  data() {
    return {
      dialogTableVisible: false,
      formLabelWidth: "120px",
      gridData: []
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      // this.gridData = gridData; 
      let data = {
        id: 100
      }
      this.$http.post("api/users/selectUser", data).then(res => {
        console.log(res)
        this.gridData = res.data.result;
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

<style lang="scss">
.box {
  // 重置dialog样式
  .el-dialog--small {
    width: 90%;
    height: 80%;
    position: relative;
    overflow: hidden;
  }
  .el-dialog__footer {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
}
</style>
