<template>
  <div id="tree">
    <div class="search">
      <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
      </el-input>
    </div>

    <el-tree
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        :filter-node-method="filterNode"
        ref="tree"
        node-key="id"
        :default-expanded-keys="[1]"
        @node-click="handleNodeClick">
    </el-tree>
  </div>
</template>

<script>
export default {
  props: {},
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      filterText: "",
      data: [],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  mounted() {
    this.getTree();
  },
  methods: {
    handleNodeClick(data) {
      if (!data.children) {
        this.$router.push(data.path);
      }
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    getTree() {
      this.$http.get("static/mockJson/tree.json").then(res => {
        console.log(res);
        this.data = res.data.tree;
      });
    }
  }
};
</script>

<style lang="scss">
@import "src/assets/scss/reset.scss";
#tree {
  .search {
    padding: 10px;
    box-sizing: border-box;
  }
  .el-tree {
    border: none;
  }
}
</style>


