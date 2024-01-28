import React, { useState, useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { NODE_APP_PATH, URL } from '../constant';

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false)
  const [todos, setTodos] = useContext(DataContext)
  const location = useLocation()
  const handleCheckAll = () => {
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.isCompleted = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  const deleteTodo = () => {
    if (location.pathname === NODE_APP_PATH) {
      axios.delete(URL)
        .then(d => {
          setTodos(d.data)
        })
        .catch(error => console.log(error, 'while deleting data'));
    }
    else {
      const newTodos = todos.filter(todo => {
        return todo.isCompleted === false
      })
      setTodos(newTodos)
      setCheckAll(false)
    }
  }

  return (
    <>
      {todos.length === 0 ? <h2>Congratulations! Nothing to do</h2>
        :
        <div className="row">
          <label htmlFor="all">
            <input type="checkbox" name="all" id="all" onChange={handleCheckAll} /> All
          </label>
          <p>You have {todos.filter(todo => todo.isCompleted === false).length} to do </p>
          <button id="delete" onClick={deleteTodo}>Delete <i className="far fa-trash-alt"></i></button>
        </div>}
    </>

  )
}
