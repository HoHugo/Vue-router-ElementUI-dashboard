<style lang='stylus' scoped>
.el-aside{
  box-shadow: 5px 0px 10px -2px rgba(0,0,0,1);
  z-index:2;
}
.el-header{
  background:rgb(59,57,74);
  height:140px;
  width:100%;
  padding: 0;
}
.el-main{
  background: rgb(41,39,52);
}
</style>
<template>
  <div id="app">
    <el-container>
      <el-aside width='220px'>
        <navmenu></navmenu>
      </el-aside>
      <el-container>
        <el-header height='90px'></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import NavMenu from './components/NavMenu'
export default {
  name: 'App',
  components: {
    'navmenu': NavMenu
  }
}
</script>
