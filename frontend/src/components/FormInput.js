import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

import { DataContext } from '../context/DataProvider'
import { URL, NODE_APP_PATH } from '../constant';

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext)
  const [todoName, setTodoName] = useState('')
  const location = useLocation()

  //getting item from input adding it to todoList
  const addTodo = e => {
    e.preventDefault();
    if (location.pathname === NODE_APP_PATH) {
      console.log(todos)
      axios.post(URL, todos)
        .then(d => {
          console.log(d)
          setTodos([...todos, { name: todoName, isCompleted: false }])
        })
        .catch(error => console.log(error, 'while setting data'));
    }
    else {
      setTodos([...todos, { name: todoName, isCompleted: false }])
      setTodoName('')
    }
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
