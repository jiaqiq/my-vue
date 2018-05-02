<template>
    <div id="layoutManage">
        <layout1>
            <template slot="layout_l">
                <tree></tree>
            </template>
            <template slot="layout_r">
                 <router-view></router-view>
            </template>
            <template slot="layout_rf">
                <div>
                    <pagination></pagination>
                </div>
            </template>
        </layout1>
    </div>
</template>

<script>
import Layout1 from "@/components/common/layout/layout1";
import tree from "@/components/common/tree";
import pagination from "@/components/common/pagination";
export default {
  components: {
    Layout1,
    tree,
    pagination
  },

  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
#layoutManage {
  height: 100%;
//   background: red;
}
</style>


