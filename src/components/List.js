import React,{useContext} from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider'
export default function List() {
  const [todos, setTodos] = useContext(DataContext);
  //id getting from ListItem componet
  const switchComplete = (id) => {
    //making exact copy of todo into newTodo
    const newTodos = [...todos]
    newTodos.forEach((element, i)=> {
      if (i === id) {
        element.isCompleted = !element.isCompleted
      }
    });
    setTodos(newTodos)
  }
    const handleEditTodos = (editvalue, id) => {
      const newTodos = [...todos]
      newTodos.forEach((element, i)=> {
        if (i === id) {
          element.name=editvalue
        }
      })
      setTodos(newTodos)
  }
  return (
    <ul>
      {
        todos.map((todo, id) => {
          return(
          <ListItem
            todo={todo}
            id={id}
            key={id}
            checkComplete={switchComplete}
            handleEditTodos={handleEditTodos}
          />
        )
      })
      }
  </ul>
  )
}
