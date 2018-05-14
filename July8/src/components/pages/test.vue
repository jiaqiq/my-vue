<template>
    <div id="test">
        <h3>测试node</h3>
        <button type="primary" @click="getNodeText">增加数据</button>
        <button type="primary" @click="delData">删除数据</button>
        <button type="primary" @click="update">修改数据</button>
        <button type="primary" @click="selectData">查询数据</button>
        <div>{{result}}</div>
    </div>
</template>

<script>


export default {
   
    data() {
       return {
           result: '',
           arr: [1, 2, 3, 4]
       }
    },
    mounted() {
      // this.getResult();
    },
    methods: {
        getNodeText() {
          this.$http.get("/api/users/addUser?name=aaa&age=18&teacher=王老师").then(res => {
            console.log(127, res)
            this.result = res.data;
          })
          .catch(err => {
            console.log(127, err)
          })
        },
        delData() {
          this.$http.post("/api/users/delUser?id=2").then(res => {
            console.log('delete', res)
            this.result = res.data;
          })
        .catch(err => {
          console.log(err)
        })
        },
        update() {
          // let data = {
          //   id:5,
          //   name:'更新',
          //   age: 28,
          //   teacher: '刘老师'
          // }
          this.$http.post("/api/users/updateUser?id=21&name=李四&age=24&teacher=刘老师").then(res => {
            console.log('update', res) 
            this.result = res.data;
          })
          .catch(err => {
            console.log(err)
          })
        },
        selectData() {
          this.$http.post("api/users/selectUser?id=88").then(res => {
            console.log('selectData', res)
            this.result = res.data;
          })
          .catch(err => {
            console.log(err)
          })
        },
        transfer(num) {
          num = parseInt(num);
          let obj = {
            1: 'aaaaaaaaaaaaaaaaa',
            2: 'bbbbbbbbbbbbbbbbb',
            3: 'ccccccccccccccccc',
            4: 'ddddddddddddddddd',
            5: 'eeeeeeeeeeeeeeeee'
          }
          return obj[num];
        },
        getSum(total, num) {
          return total + num;
        },
        getResult() {
          this.result = this.arr.reduce(this.getSum)
        }
    }
}
</script>

<style lang="scss" scoped>
#test {
  
}
</style>


