<template>
    <div id="test">
        <h3>nodejs</h3>
        <el-button size="small" type="primary" @click="addUser">增加数据</el-button>
        <el-button size="small" type="primary" @click="deleteUser">删除数据</el-button>
        <el-button size="small" type="primary" @click="updateUser">修改数据</el-button>
        <el-button size="small" type="primary" @click="queryUser">查询数据</el-button>
        <el-button size="small" type="primary" @click="loadImgs">加载图片</el-button>
        <el-input type="text" size="mini" v-model="wsData"></el-input>
        <el-button type="primary" @click="stateFun">Vuex</el-button>
        <img :src="imgSrc" alt="图片">
        <el-button @click="showFiles">showFiles</el-button>
        <!-- <el-button @click="fileDownload">fileDownload</el-button> -->
        <div>{{result}}</div>
        <div>{{selectResult}}</div>
        <div>{{showState}}</div>

        <el-upload
          class="upload-demo"
          action="/api/upload/uploads"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <div class="echarts">
          <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import userApi from '@/api/user';
import uploadApi from '@/api/upload';

export default {
  /*多种写法如下*/
  // computed: mapState({
  //   count: 'count'
  // }),
  // computed: mapState([
  //   "count"
  // ]),
  /*把count映射成count111（别名）以下是与本地计算属性合并写法 */
  computed: {
    localComputed () { /* ... */ },
    ...mapState({
      count111: 'count'
    }),
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodos',
      'doneTodosCount',
      'getTodoById',
      // ...
    ])
  },
  data() {
    return {
      imgSrc: '',
      result: "",
      selectResult: "",
      arr: [1, 2, 3, 4],
      wsData: "",
      showState: 0,
      fileList: [],
      // 指定图表的配置项和数据
      option: {
        title: {
          text: "在Vue中使用"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },
  mounted() {
    // this.getResult();
    // this.websocket();
    this.drawLine();
  },
  methods: {
    loadImgs() {
      let data = { params: { fileName: '20180516140734.jpg'} }

      uploadApi.filesDown(data).then(res => {
        console.log(111, res)
      })
      .catch(err => {
        console.log(err);
      })
    },
    showFiles() {
      let data = {};
      uploadApi.files(data).then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
    },
    // ...mapMutations([
    //   'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

    //   // `mapMutations` 也支持载荷：
    //   //'incrementBy' 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    // ]),
    // ...mapMutations({
    //   add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    // }),
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ]),
    stateFun() {
      // this.$store.commit('increment')
      // this.increment();
      // this.add();
      this.increment();
      this.showState = this.count111;
      // console.log('Vuex', this.count111)
      // console.log(111, this.doneTodos)
      // console.log(222, this.getTodoById(2))
      // console.log(333, this.doneTodosCount)
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption(this.option);
    },
    fileDownload() {
      this.$http
        .get("/api/upload/files/:QQ截图20180516140734.jpg")
        .then(res => {
          console.log(res);
        });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    websocket() {
      let ws = new WebSocket("ws://localhost:8181");
      ws.onopen = () => {
        // Web Socket 已连接上，使用 send() 方法发送数据
        ws.send(this.wsData);
        console.log("数据发送中...");
      };
      ws.onmessage = evt => {
        console.log("数据已接收...");
        console.log("服务端返回", evt.data);
        this.result = evt.data;
      };
      ws.onclose = function() {
        // 关闭 websocket
        console.log("连接已关闭...");
      };
      // 组件销毁时调用，中断websocket链接
      this.over = () => {
        ws.close();
      };
    },
    beforeDestroy() {
      this.over();
    },
    addUser() {
      let data = {
        params: {
          name: "abc",
          age: 18,
          teacher: "赵老师"
        }
      };
      userApi.addUser(data).then(res => {
        this.result = res.data;
      })
      .catch(err => {
        console.log(err);
      })
    },
    /**删除用户 */
    deleteUser() {
      let data = {
        id: 30
      };
      userApi.deleteUser(data).then(res => {
        this.result = res.data;
      })
      .catch(err => {
        console.log(err);
      })
    },
    /**更新用户 */
    updateUser() {
      let data = {
        id: 33,
        name: "更新2",
        age: 28,
        teacher: "刘老师"
      };
      userApi.updateUser(data).then(res => {
        this.result = res.data;
      })
      .catch(err => {
        console.log(err);
      })
    },
    /**查询单个用户 */
    queryUser() {
      let data = { id: 101 };
      userApi.queryUser(data).then(res => {
        this.selectResult = res.data;
      })
      .catch(err => {
        console.log(err)
      })
    },
    transfer(num) {
      num = parseInt(num);
      let obj = {
        1: "aaaaaaaaaaaaaaaaa",
        2: "bbbbbbbbbbbbbbbbb",
        3: "ccccccccccccccccc",
        4: "ddddddddddddddddd",
        5: "eeeeeeeeeeeeeeeee"
      };
      return obj[num];
    },
    getSum(total, num) {
      return total + num;
    },
    getResult() {
      this.result = this.arr.reduce(this.getSum);
    }
  }
};
</script>

<style lang="scss" scoped>
#test {
}
</style>


