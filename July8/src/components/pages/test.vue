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
          let data = {
            params: {
              name:'abc',
              age: 18,
              teacher: '赵老师'
            }
          }
          this.$http.get("/api/users/addUser", data).then(res => {
            console.log(127, res)
            this.result = res.data;
          })
          .catch(err => {
            console.log(127, err)
          })
        },
        delData() {
          let data = {
            id:30
          }
          this.$http.post("/api/users/delUser", data).then(res => {
            console.log('delete', res)
            this.result = res.data;
          })
        .catch(err => {
          console.log(err)
        })
        },
        update() {
          let data = {
            id:33,
            name:'更新2',
            age: 28,
            teacher: '刘老师'
          }
          this.$http.post("/api/users/updateUser", data).then(res => {
            console.log('update', res) 
            this.result = res.data;
          })
          .catch(err => {
            console.log(err)
          })
        },
        selectData() {
          let data = {
            id:100
          }
          this.$http.post("api/users/selectUser", data).then(res => {
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


