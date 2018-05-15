<template>
    <div id="test">
        <h3>测试node</h3>
        <button type="primary" @click="getNodeText">增加数据</button>
        <button type="primary" @click="delData">删除数据</button>
        <button type="primary" @click="update">修改数据</button>
        <button type="primary" @click="selectData">查询数据</button>
        <input type="text" v-model="wsData">
        <div>{{result}}</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      result: "",
      arr: [1, 2, 3, 4],
      wsData: ""
    };
  },
  mounted() {
    // this.getResult();
    this.websocket();
  },
  methods: {
    websocket() {
      let ws = new WebSocket("ws://localhost:8181");
      ws.onopen = () => {
        // Web Socket 已连接上，使用 send() 方法发送数据
        ws.send(this.wsData);
        console.log("数据发送中...");
      };
      ws.onmessage = evt => {
        console.log("数据已接收...");
        console.log('服务端返回', evt.data)
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
    getNodeText() {
      let data = {
        params: {
          name: "abc",
          age: 18,
          teacher: "赵老师"
        }
      };
      this.$http
        .get("/api/users/addUser", data)
        .then(res => {
          console.log(127, res);
          this.result = res.data;
        })
        .catch(err => {
          console.log(127, err);
        });
    },
    delData() {
      let data = {
        id: 30
      };
      this.$http
        .post("/api/users/delUser", data)
        .then(res => {
          console.log("delete", res);
          this.result = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    update() {
      let data = {
        id: 33,
        name: "更新2",
        age: 28,
        teacher: "刘老师"
      };
      this.$http
        .post("/api/users/updateUser", data)
        .then(res => {
          console.log("update", res);
          this.result = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    selectData() {
      let data = {
        id: 100
      };
      this.$http
        .post("api/users/selectUser", data)
        .then(res => {
          console.log("selectData", res);
          this.result = res.data;
        })
        .catch(err => {
          console.log(err);
        });
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


