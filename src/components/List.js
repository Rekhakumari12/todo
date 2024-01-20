import React, { useContext } from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider'
export default function List() {
  const [todos, setTodos] = useContext(DataContext);
  //id getting from ListItem component
  const switchComplete = (id) => {
    //making exact copy into newTodo
    const newTodos = [...todos]
    newTodos.forEach((element, i) => {
      if (i === id) {
        element.isCompleted = !element.isCompleted
      }
    });
    setTodos(newTodos)
  }
  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos]
    newTodos.forEach((element, i) => {
      if (i === id) {
        element.name = editValue
      }
    })
    setTodos(newTodos)
  }
  return (
    <ul>
      {
        todos.map((todo, id) => {
          return (
            <ListItem
              todo={todo}
              id={id}
              key={todo.id}
              checkComplete={switchComplete}
              handleEditTodos={handleEditTodos}
            />
          )
        })
      }
    </ul>
  )
}
