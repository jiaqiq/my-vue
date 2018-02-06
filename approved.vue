<template>
  <layout1 :lt-span="19" :rt-span="5" margin-left="-10px" margin-right="-10px" v-loading="loading" :element-loading-text="loadingText">
    <template slot="left-top">
      <bd-tabs type="border-card" v-model="activeName">
        <el-tab-pane :label="`${tabLabel} ( 共匹配到 ${total} 笔记录 )`" name="first">
          <el-table :data="listData" border ref="multipleTable" @sort-change="sortChange" @row-click="rowClick" @selection-change="selectionChange" @cell-click="openWait" class="el-table--gray" :row-class-name="$rowclassname1">
            <el-table-column type="selection" width="40">
            </el-table-column>
            <el-table-column v-for="(v,k) in listHeader" :key="k" header-align="center" :align='v.align' :width='v.width' :resizable="v.resizable" show-overflow-tooltip :sortable="v.sortable" :prop="v.prop" :class-name="v.className" :label="v.label">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </bd-tabs>
      <!-- <lookSchedule :propLook="lookScheduleVisible" @close="lookScheduleVisible = false" :scheduleInfo="scheduleInfo"></lookSchedule> -->
      <editSchedule :propNew="editScheduleVisible" :title.sync="title" :echoData="scheduleEchoData"></editSchedule>
      <orgCheck :showLookCustomer="customerID" :getFlowInstance="instanceObj" @refreshList="refreshList"></orgCheck>
    </template>
    <!-- <template slot="left-bottom">
            <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[25, 50, 75, 100]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </template> -->
    <template slot="right">
      <waitQuery @formData="receiveQueryData" :order="false"></waitQuery>
    </template>
  </layout1>
</template>

<script>
//右侧查询
import waitQuery from "./waitQuery";
import urlConfig from "@/api/index";
import constService from "@/api/admin_api/constService";
import lookSchedule from "@components/Customer/pages/lookSchedule";
import scheduleService from "@/api/schedule_api/schedule";
import layout1 from "@components/Admin/common/com_layout/layout1";
import editSchedule from "@components/Customer/pages/Schedule1";
import workFlowService from "@/api/workFlow_api/index";
import orgCheck from "@components/Customer/extendPages/crm/orgCheck";
import util from "@/utils/common";
import BDTabs from "@components/Admin/common/tabs/tabs";
export default {
  props: {
    propSearch: {
      type: Boolean
    },
    propRefresh: {
      type: Boolean
    },
    propDelete: {
      type: Boolean
    },
    propNewAdd: {
      type: Boolean
    }
  },
  watch: {
    propSearch: function (val) {
      console.log(val);
      this.queryVisibility = !this.queryVisibility;
      if (this.queryVisibility === true) {
        this.scheduleSpan = 19;
      } else {
        this.scheduleSpan = 24;
      }
    },
    propRefresh: function (val) {
      this.pullListData("32A32A8C043E24DF83D1154AB7422E05");
    },
    propDelete: function (val) {
      this.deleteMore(this.selection);
    },
    propNewAdd: function (val) {
      console.log(val);
      this.$message({
        message: `${val}, 新增！`,
        type: "success"
      });
    }
  },
  components: {
    waitQuery,
    lookSchedule,
    layout1,
    editSchedule,
    orgCheck,
    "bd-tabs": BDTabs
  },
  data() {
    return {
      tabLabel: "已审事项",
      activeName: "first",
      instanceObj: {},
      instanceId: "",
      taskId: "",
      objId: "",
      customerID: "",
      //弹出框标题
      title: "新建日程",
      //编辑日程明细
      editScheduleVisible: false,
      scheduleEchoData: {},
      //查看日程明细
      lookScheduleVisible: false,
      //日程明细
      scheduleInfo: {},
      loadingText: "拼命加载中！",
      loading: false,
      //查询参数
      queryData: {},
      pageNum: 1, //当前在第几页 Number
      pageSize: 25, //每页显示条目个数
      total: 400, //总条数
      pageOrder: "D", //A升序 D降序
      orderCol: "", //排序的列
      //选择的行
      selection: [],
      //栅格占据的列数
      scheduleSpan: 19,
      //表格默认高度
      tableHeight: "453",
      //表头
      listHeader: [
        {
          prop: "INSTANCE_REQUEST_NAME",
          label: "流程实例",
          sortable: "custom",
          className: "bule"
          // width: '400'
        },
        {
          prop: "INSTANCE_CRT_TIME",
          label: "已审时间",
          sortable: "custom",
          align: "center",
          width: "140"
        },
        {
          prop: "USER_OBJNAME",
          label: "创建人",
          sortable: "custom",
          align: "center",
          width: "120"
        },
        {
          prop: "APPROVE_STATUS",
          label: "审批状态",
          sortable: "custom",
          align: "center",
          width: "100"
        },
        {
          prop: "NODE_OBJ_NAME",
          label: "节点类型",
          sortable: "custom",
          align: "center",
          width: "120"
        },
        {
          prop: "WORKFLOW_WF_NAME",
          label: "任务类型",
          sortable: "custom",
          align: "center",
          width: "120"
        }
      ],
      listData: [
        {
          INSTANCE_REQUEST_NAME: "流程实例",
          INSTANCE_CRT_TIME: "2017-10-13",
          INSTANCE_CRT_PSN: "张三",
          APPROVE_STATUS: "通过",
          NODE_OBJ_NAME: "李四",
          APPROVAL_TYPE: "机构管理"
        }
      ],
      queryVisibility: true
    };
  },
  mounted() {
    //初始化列表数据
    this.pullListData("32A32A8C043E24DF83D1154AB7422E05");
    // this.pullListData(this.userId);
    // this.pullListData(util.getTokenId());
    // this.pullListData("32A32A8C0CB12D6D35788990562C0E05");
    // this.pullListData("ff8080814a993db6014a9a43de260729");
    // this.pullListData("32A32A8C043E24DF83D1154AB7422E05");
  },
  methods: {
    openTips(str) {
      this.$alert(str, "提示", {
        confirmButtonText: "确定",
        closeOnPressEscape: true,
        callback: action => {
          //关闭
        }
      });
    },
    refreshList() {
      this.pullListData("32A32A8C043E24DF83D1154AB7422E05");
      // this.pullListData(util.getTokenId());
    },
    pullListData(id) {
      let data = {
        userId: id
      };
      let urlService = workFlowService(
        "/workflow/node/request/pendingList",
        data
      );
      let url = urlService.url;
      let jsonData = urlService.jsonData;
      console.log(url);

      this.$http
        .get(url, jsonData)
        .then(res => {
          // if (res.data.statusCode === '200') {
            // this.listData = res.data.result;
            console.log(this.listData);
            console.log("listData");
            this.listData.forEach((v, k) => {
              v.INSTANCE_CRT_TIME = v.INSTANCE_CRT_TIME.slice(0, -3);
            });
          // } else {
          //   this.openTips(`${res.data.msg}`);
          // }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //接收查询条件
    receiveQueryData(obj) {
      //临时
      this.refreshList();
      ///
      //   let pageInfo = {
      //     pageNum: this.pageNum,
      //     pageSize: this.pageSize,
      //     prop: this.orderCol,
      //     sort: this.pageOrder
      //   };
      //   let queryData = Object.assign(obj, pageInfo);
      //   let data = {
      //     scheduleparams: queryData
      //   };
      //   let urlService = urlConfig(
      //     "componentService",
      //     "cloudextends-schedules",
      //     "findScheduleList",
      //     data
      //   );
      //   let url = urlService.url;
      //   let jsonData = urlService.jsonData;

      //   this.$http
      //     .post(url, jsonData)
      //     .then(res => {
      //       //获取表格数据
      //       this.listData =
      //         res.data.result["cloudextends-schedules-findScheduleList"][
      //           "findschedulelist"
      //         ];
      //       this.loading = false;
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
    },

    //删除
    Delete(array) {
      let data = {
        schedule: array
      };
      let deleStatus = false;
      let urlService = urlConfig(
        "componentService",
        "cloudextends-schedules",
        "deleteSchedule",
        data
      );
      let url = urlService.url;
      let jsonData = urlService.jsonData;
      this.$http
        .post(url, jsonData)
        .then(res => {
          console.log(res);
          if (res.data.msg == "业务执行成功！") {
            deleStatus = true;
          }
        })
        .catch(error => {
          console.log(error);
        });
      return !deleStatus;
    },
    //单行删除
    deleteOne(row) {
      // console.log(row)
      this.$confirm(`您即将删除 ${row.INSTANCE_REQUEST_NAME}，是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let deleteArr = [];
          deleteArr.push({ objid: row.OBJID });
          if (this.Delete(deleteArr)) {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.pullListData("32A32A8C043E24DF83D1154AB7422E05");
          } else {
            this.$message({
              type: "error",
              message: "发生未知错误，删除失败!"
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除!"
          });
        });
    },
    //批量删除
    deleteMore(arr) {
      this.$confirm(`您即将删除 ${arr.length} 条数据，是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let deleteArr = [];
          arr.forEach(val => {
            deleteArr.push({ objid: val.OBJID });
          });

          if (this.Delete(deleteArr)) {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.pullListData("32A32A8C043E24DF83D1154AB7422E05");
          } else {
            this.$message({
              type: "error",
              message: "发生未知错误，删除失败!"
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除!"
          });
        });
    },
    /**
         * 行编辑按钮
         */
    editPerson(row) {
      scheduleService.loadOneScheduleInfo(row.OBJID).then(res => {
        this.editScheduleVisible = !this.editScheduleVisible;
        this.title = "编辑日程";
        this.scheduleEchoData = res;
      });
    },
    //分页(pageSize 改变时触发)
    handleSizeChange(val) {
      this.pageSize = val;
      this.pullListData("32A32A8C043E24DF83D1154AB7422E05");
    },
    //分页(currentPage 改变时会触发)
    handleCurrentChange(val) {
      //当前页改变，滚动条置顶
      this.$refs["multipleTable"].$refs.bodyWrapper.scrollTop = 0;
      this.pageNum = val;
      this.pullListData("32A32A8C043E24DF83D1154AB7422E05");
    },
    //点击XX名称出现编辑框
    openWait(row, column, cell, event) {
      console.log(column, "column");
      if (column.property === "INSTANCE_REQUEST_NAME") {
        this.instanceId = row.INSTANCE_ID;
        this.taskId = row.TASK_ID;
        this.objId = row.OBJID;
        this.userId = row.USER_ID;
        var instanceObj = {
          instanceId: row["INSTANCE_ID"],
          taskId: row["TASK_ID"],
          objId: row["OBJID"],
          // userId: row["USER_ID"]
          userId: row["TASK_USER_ID"],
          dbId: row["DB_OBJID"]
        };
        var obj = {
          key: !this.propNewAdd,
          type: "look",
          customerID: row["OBJID"],
          rowObj: row
        };
        // if (row.APPROVAL_TYPE == 2) {
        this.customerID = obj;
        this.instanceObj = instanceObj;
        // }
      }
    },
    //选择项发生变化
    selectionChange(selection) {
      this.selection = selection;
    },
    rowClick(row, event, column) {
      console.log(column, "column");
      if (
        column.className === "bule" ||
        column.property === "INSTANCE_REQUEST_NAME"
      ) {
      } else {
        this.$refs.multipleTable.toggleRowSelection(row);
      }
    },
    //表格排序
    sortChange(obj) {
      if (obj.order === "descending") {
        this.pageOrder = "D";
      } else if (obj.order === "ascending") {
        this.pageOrder = "A";
      }
      //预防点击排序出现字段名为null的bug
      if (obj.prop == null) {
        this.orderCol = "INSTANCE_REQUEST_NAME";
      } else {
        this.orderCol = obj.prop;
      }
      this.pullListData("32A32A8C043E24DF83D1154AB7422E05");
    }
  }
};
</script>

<style lang="scss" scoped>
.bule {
  color: bule;
}
</style>



