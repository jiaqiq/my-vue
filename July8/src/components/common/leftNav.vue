<template>
  <div class="box">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="0" @click="isCollapseFn">
        <template>
          <i :class="collapseIcon"></i>
        </template>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">Element</span>
        </template>
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-share"></i>
          <span slot="title">Vue</span>
        </template>
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span slot="title">es6</span>
        </template>
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-picture"></i>
          <span slot="title">css</span>
        </template>
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapseIcon: 'el-icon-d-arrow-right',
      isCollapse: true
    };
  },
  methods: {
    isCollapseFn() {
      if (this.isCollapse) {
        this.collapseIcon = 'el-icon-d-arrow-left';
      } else {
        this.collapseIcon = 'el-icon-d-arrow-right';
      }
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 300px;
}
</style>