<template>
  <div id="tree">
    <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText">
    </el-input>

    <el-tree
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        :filter-node-method="filterNode"
        ref="tree"
        node-key="id"
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
      console.log(data);
      if (!data.children) {
        this.$router.push("/content/layoutManage/" + data.path);
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

<style lang="scss" scoped>
#tree {
  .el-tree {
    border: none;
  }
}
</style>


