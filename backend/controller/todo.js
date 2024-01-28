const ObjectId = require('mongoose').Types.ObjectId
const Todo = require('../model/todo')

async function handleGetTodo(req, res) {
  const allTodos = await Todo.find({})
  return res.status(200).send(allTodos)
}

async function handleUpdateTodoById(req, res) {
  const body = req.body
  const paramId = req.params.id
  let updatedResult;
  try {
    if (ObjectId.isValid(paramId)) {
      updatedResult = await Todo.findByIdAndUpdate(paramId, {
        name: body.name,
        isCompleted: body.isCompleted
      }, { new: true })

      if (updatedResult) updatedResult = await Todo.find({})
      else updatedResult = { error: 'Error while updating todo with id ' + paramId }
    }
  } catch (e) { console.log(e, 'error while updating data') }

  return res.send(updatedResult)
}

async function handleCreateTodo(req, res) {
  const body = req.body
  if (!body.name || !body.isCompleted) {
    res.status(400).send({ error: 'All fields required' })
  }

  const result = await Todo.create({ name: body.name, isCompleted: body.isCompleted })
  return res.status(201).send({ success: 'success', id: result._id })
}

async function handleDeleteSelectedTodo(req, res) {
  const result = await Todo.deleteMany({ isCompleted: true })
  const allTodos = await Todo.find({})
  return res.status(200).send(allTodos)
}

module.exports = {
  handleGetTodo,
  handleUpdateTodoById,
  handleCreateTodo,
  handleDeleteSelectedTodo,
}
