const express = require('express')
const { handleGetTodo, handleUpdateTodoById, handleDeleteSelectedTodo, handleCreateTodo } = require('../controller/todo')
const router = express.Router()

router.route('/')
  .get(handleGetTodo)
  .post(handleCreateTodo)
  .delete(handleDeleteSelectedTodo)


router.patch('/:id', handleUpdateTodoById)
router.put('/:id', handleUpdateTodoById)

module.exports = router