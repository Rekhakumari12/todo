
const Todo = require('../model/todo')
async function handleGetTodo(req, res) {
  const allTodos = await Todo.find({})
  return res.send(allTodos)
}

async function handleUpdateTodoById(req, res) {
  await Todo.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    isCompleted: req.body.isCompleted
  })
  return res.status(201).send({ success: 'success' })
}

async function handleCreateTodo(req, res) {
  const body = req.body
  console.log(req.body, '===========')
  if (!body.name || !body.isCompleted) {
    res.status(400).send({ error: 'All fields required' })
  }

  const result = await Todo.create({ name: body.name, isCompleted: body.isCompleted })
  return res.status(201).send({ success: 'success', id: result._id })
}

async function handleDeleteAllTodo(req, res) {
  await Todo.deleteMany({})
  return res.status(201).send({ success: "Great! you have nothing to do" })
}

module.exports = {
  handleGetTodo,
  handleUpdateTodoById,
  handleCreateTodo,
  handleDeleteAllTodo,
}
