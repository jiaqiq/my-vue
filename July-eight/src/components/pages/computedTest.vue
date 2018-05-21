<template>
  <div class="box">
      <div>{{even}}</div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          msg: [1, 2, 3, 4, 5, 6]
      }
  },
  computed: {
      even: function() {
          return this.msg.filter(function(item) {
              return item % 2 === 0;
              console.log(this.msg)
          })
      }
  }
}
</script>

