import React, { useContext } from 'react'
import ListItem from './ListItem'
import { DataContext } from '../context/DataProvider'
import { NODE_APP_PATH, URL } from '../constant';
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default function List() {
  const [todos, setTodos] = useContext(DataContext);
  const location = useLocation()

  //id getting from ListItem component
  const switchComplete = (id, currentTodo) => {
    if (location.pathname === NODE_APP_PATH) {
      const body = { isCompleted: !currentTodo.isCompleted }
      axios.patch(`${URL}/${id}`, body)
        .then(response => {
          console.log(response)
          return setTodos(response.data)
        })
        .catch(error => console.log(error, 'while updating isCompleted'));
    }
    else {
      //making exact copy into newTodo
      const newTodos = [...todos]
      newTodos.forEach((element, i) => {
        if (i === id) {
          element.isCompleted = !element.isCompleted
        }
      });
      setTodos(newTodos)
    }
  }

  const handleEditTodos = (editedTodoName, id) => {
    if (location.pathname === NODE_APP_PATH) {
      const body = { name: editedTodoName }
      axios.patch(`${URL}/${id}`, body)
        .then(response => {
          console.log(response)
          return setTodos(response.data)
        })
        .catch(error => console.log(error, 'while updating todo name'));
    }
    else {
      const newTodos = [...todos]
      newTodos.forEach((element, i) => {
        if (i === id) {
          element.name = editedTodoName
        }
      })
      setTodos(newTodos)
    }
  }
  return (
    <ul>
      {
        todos.map((todo, id) => {
          return (
            <ListItem
              todo={todo}
              id={todo._id || id}
              key={todo._id || id}
              checkComplete={switchComplete}
              handleEditTodos={handleEditTodos}
            />
          )
        })
      }
    </ul>
  )
}
