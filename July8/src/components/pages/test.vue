<template>
    <div id="test">
        <h3>测试node</h3>
        <button type="primary" @click="getNodeText">请求数据</button>
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


