<style lang='stylus' scoped>
.bodyList{
  margin-bottom: 5px;
  border-radius: 4px;
  background: rgb(59, 57, 74);
  min-height: 36px;
  line-height: 36px;
  box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.4);
  text-indent: 1em;
}
input{
  width: 100%;
  min-height: 36px;
  border-radius: 4px;
  font-size: 20px;
  text-indent: 1em;
}
button{
  width: 100%;
  height: 36px;
  border-radius: 4px;
  border: 0;
  box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.4);
  background: rgb(59, 57, 74);
  color: white;
  font-size: 18px;
}
</style>
<template>
  <div>
    <el-row :gutter='10' v-for='item in list' :key='item.id'>
      <el-col :span='12'>
      <input type="text" v-show='lock' v-model='item.title'>
      <div  v-show='!lock' class='bodyList' v-text='item.title'></div>
      </el-col>
      <el-col :span='4'>
        <button @click='changeTitle'>Update</button>
      </el-col>
      <el-col :span='4'>
        <button @click='changeDone(item.id)'>Done</button>
      </el-col>
      <el-col :span='4'>
        <button>Delete</button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ['list'],
  data () {
    return {
      lock: false
    }
  },
  methods: {
    changeTitle () {
      this.lock = !this.lock
    },
    changeDone (id) {
      this.list.map(item => item.id === id ? {
        ...item, 'done': true
      } : item)
      this.$emit('show-yizuo', id)
    }
  }
}
</script>
