const express = require('express')
const { handleGetTodo, handleUpdateTodoById, handleDeleteAllTodo, handleCreateTodo } = require('../controller/todo')
const router = express.Router()

router.route('/')
  .get(handleGetTodo)
  .post(handleCreateTodo)
  .delete(handleDeleteAllTodo)


router.patch('/:id', handleUpdateTodoById)
router.put('/:id', handleUpdateTodoById)

module.exports = router