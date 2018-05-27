<style lang='stylus' scoped>
.todos{
  margin: 0 auto;
  .head{
    .inputText{
      width: 100%;
      min-height: 36px;
      border-radius: 4px;
      background: linear-gradient(to right, #343594, #55309D, #8A2DAC, #BB31B9);
      border: 0;
      color: white;
      box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.4);
      text-indent: 1em;
      font-size: 20px;
    }
    button{
      width: 100%;
      height: 36px;
      border-radius: 4px;
      background: linear-gradient(to right, #B630B8, #CB33BD, #CF34BE);
      border: 0;
      box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.4);
      color: white;
      font-size: 18px;
    }
  }
  .body{
    margin-top: 20px;
  }
  .weizuoList{
    background: linear-gradient(to right, #4481E5, #5295E7, #63AEEA, #71C3ED);
    min-height: 300px;
    box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.4);
    border-radius: 4px;
  }
  .yizuoList{
    background: linear-gradient(to right, #931E23, #BA3A43, #DF5960, #E25C63);
    min-height: 300px;
    box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.4);
    border-radius: 4px;
  }
}
</style>
<template>
  <div class='todos'>
    <el-row :gutter='10'>
      <el-col :span='6'>
        <div class='weizuoList'>123</div>
      </el-col>
      <el-col :span='12'>
        <div class="head">
          <el-row :gutter='10'>
            <el-col :span='20'>
              <input type="text" placeholder="Please enter a list" class='inputText' v-model='title'>
            </el-col>
            <el-col :span='4'>
              <button @click='addList'>Add</button>
            </el-col>
          </el-row>
        </div>
        <div class="body">
          <todo-Body :list='list' ref='todoBody' @show-yizuo='show_yizuo'></todo-Body>
        </div>
      </el-col>
      <el-col :span='6'>
        <div class='yizuoList'>
          <p v-for='item in yizuoList' :key='item.id' v-text='item.title'></p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import todoBody from './TodoBody'
export default {
  data () {
    return {
      title: '',
      list: null,
      yizuoId: null,
      yizuoList: []
    }
  },
  methods: {
    async init () {
      var {todos} = await fetch('/api/todos').then(data => data.json())
      this.list = todos
    },
    addList () {
      var id = ''
      var str = '7418520963'
      for (var i = 0; i < 8; i++) {
        id += str[~~(Math.random() * str.length)]
      }
      this.list.push({
        id: id,
        title: this.title,
        done: false
      })
      this.title = ''
    },
    show_yizuo (id) {
      this.yizuoId = id
      this.yizuoList = this.list.filter( item => item.id === id)
    }
  },
  mounted () {
    this.init()
  },
  components: {
    'todo-Body': todoBody
  }
}
</script>
