var express = require('express')
const app = express()
var formidable = require('formidable')

var todos = [
  {'id': 1, 'title': 'eat', 'done': false},
  {'id': 2, 'title': 'drink', 'done': true},
  {'id': 3, 'title': 'playgame', 'done': false}
]

// 一套RESTful风格的API
// 列出todos
app.get('/todos', function (req, res) {
  res.json({todos})
})

// 删除某一条todo
app.delete('/todos/:id', function (req, res) {
  // 得到id
  var id = req.params.id
  // 改变
  todos = todos.filter(item => item.id != id)
  res.json({ 'result': 200 }) // 200表示成功
})

// 增加一条todo
app.post('/todos', function (req, res) {
  // 得到title
  var form = new formidable.IncomingForm()
  form.parse(req, function (err, {title}) {
    // 随机id
    var id = Date.parse((new Date())) + parseInt(Math.random() * 10000)
    todos.push(
      {
        id,
        title,
        done: false
      }
    )
    res.json({id})
  })
})

// 修改一个todo的done
app.post('/todos/:id', function (req, res) {
  var id = req.params.id
  // 得到done
  var form = new formidable.IncomingForm()
  form.parse(req, function (err, { done }) {
    todos = todos.map(item => item.id == id ? {
      ...item,
      done
    } : item)
  })
  res.json({ 'result': 200 }) // 200表示成功
})

app.listen(3000)
