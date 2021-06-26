import React,{useState,useEffect, useContext} from 'react'
import { DataContext } from './DataProvider'
export default function Footer() {
  const [checkAll, setCheckAll] = useState(false)
  const [todos, setTodos] = useContext(DataContext)
  const handleCheckAll = () => {
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.isCompleted=!checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  const deleteTodo = () => {
    const newTodos = todos.filter(todo => {
      return todo.isCompleted===false
    })
    setTodos(newTodos)
    setCheckAll(false)
  }

  return (
    <>
      {todos.length === 0 ? <h2>Congratulations! Nothing to do</h2>
        :
        <div className="row">
          <label htmlFor="all">
            <input type="checkbox" name="all" id="all" onChange={handleCheckAll} />
            All
          </label>
          <p>You have {todos.filter(todo=>todo.isCompleted===false).length} to do </p>
          <button id="delete" onClick={deleteTodo}>Delete <i class="far fa-trash-alt"></i></button>
        </div>}
      </>
    
  )
}
