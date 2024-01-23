require('dotenv').config()

const http = require('http')
const todos = require('./todos.json')
const express = require('express')


const app = express()

const PORT = process.env.PORT || 8000

app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  console.log("your middleware called")
  next()
})

app.route('/api/todo')
  .get((req, res) => {
    return res.json(todos)
  })
  .post((req, res) => {
    const body = req.body

    todos.push({ ...body, id: todos.length + 1 })
    return res.json(todos)
  })
  .delete((req, res) => {

    todos.length = 0
    return res.json(todos)

  })


app.patch('/api/todo/:id', (req, res) => {

  const data = todos.find((todo) => todo.id === Number(req.params.id))
  data.name = req.body.name;
  data.isCompleted = req.body.isCompleted
  return res.json(todos)
})


// create web server
const server = http.createServer(app)

server.listen(PORT, () => console.log("server started", PORT))