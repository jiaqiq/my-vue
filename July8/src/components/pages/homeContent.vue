<template>
  <div class="box">
    <el-row style="margin-top:20px;" v-for="block in blocks" :key="block.items.title">
      <el-col :span="6" v-for="item in block.items" :key="item.title">
          <block class="block" :dataInfo="item"></block>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Block from '@/components/common/com_block'
export default {
  components: {
    Block
  },
  data() {
    return {
      blocks: [
        {
          items: [
            {
              id: 1,
              title: '标题1',
              detail: '暂无详情',
              logoStyle: {
                background: '#d0e0f8'
              }
            },
            {
              id: 2,
              title: '标题2',
              detail: '暂无详情',
              logoStyle: {
                background: '#ccc'
              }
            },
            {
              id: 3,
              title: '标题3',
              detail: '暂无详情',
              logoStyle: {
                background: 'blue'
              }
            },
            {
              id: 4,
              title: '标题4',
              detail: '暂无详情',
              logoStyle: {
                background: 'red'
              }
            }
          ],
        }, 
        {
          items: [
            {
              id: 5,
              title: '标题5',
              detail: '暂无详情',
              logoStyle: {
                background: '#d0e0f8'
              }
            },
            {
              id: 6,
              title: '标题6',
              detail: '暂无详情',
              logoStyle: {
                background: '#ccc'
              }
            },
            {
              id: 7,
              title: '标题7',
              detail: '暂无详情',
              logoStyle: {
                background: 'blue'
              }
            },
            {
              id: 8,
              title: '标题8',
              detail: '暂无详情',
              logoStyle: {
                background: 'red'
              }
            }
          ]
        }
      ]
    } 
  },

  methods: {
   
  }

}
</script>

<style lang="scss" scoped>
.box {
  .block {
    display: inline-block;
  }
}
</style>

