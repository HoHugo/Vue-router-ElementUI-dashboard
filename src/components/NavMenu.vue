<style lang='stylus' scoped>
.tac{
  height:3000px;
  background: rgb(59,57,74);
}
.el-menu{
  border-right: 0;
}
.el-col-24{
  border-right:1px solid rgb(59,57,74);
  overflow hidden;
}
.el-col-19{
  width:100%;
}
.logo{
  width:100%;
  height:90px;
  background: rgb(59,57,74);
}
</style>
<template>
  <el-row class="tac">
  <el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
      unique-opened
      background-color="rgb(59,57,74)"
      text-color="rgb(157,156,164)"
      active-text-color="rgb(62,144,237)">
      <div class='logo'></div>
      <el-submenu :index="val.id" v-for='val in menu' :key='val.id'>
        <template slot="title">
          <span v-text='val.name'></span>
        </template>
        <el-menu-item-group v-for='sub in val.sub' :key='sub.name'>
          <el-menu-item :index="sub.componentName" v-text='sub.name'></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>
<script>
import menu from '../config/navConfig.js'
export default {
  data () {
    return {
      menu: menu
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
