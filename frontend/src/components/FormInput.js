import React, { useState, useContext } from 'react'
import { DataContext } from '../context/DataProvider'
export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext)
  const [todoName, setTodoName] = useState('')
  //getting item from input adding it to todoList
  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, isCompleted: false }])
    setTodoName('')
  }
  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input type="text" name="todos" id="todos" required placeholder="What needs to be done?"
        value={todoName}
        onChange={e => setTodoName(e.target.value.toLowerCase())} />
      <button type="submit">Create <i className="far fa-plus-square"></i></button>
    </form>
  )
}
