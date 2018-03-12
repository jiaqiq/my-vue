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
              title: '标题1',
              detail: '暂无详情',
              logoStyle: {
                background: '#d0e0f8'
              }
            },
            {
              title: '标题2',
              detail: '暂无详情',
              logoStyle: {
                background: '#ccc'
              }
            },
            {
              title: '标题3',
              detail: '暂无详情',
              logoStyle: {
                background: 'blue'
              }
            },
            {
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
              title: '标题5',
              detail: '暂无详情',
              logoStyle: {
                background: '#d0e0f8'
              }
            },
            {
              title: '标题6',
              detail: '暂无详情',
              logoStyle: {
                background: '#ccc'
              }
            },
            {
              title: '标题7',
              detail: '暂无详情',
              logoStyle: {
                background: 'blue'
              }
            },
            {
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

