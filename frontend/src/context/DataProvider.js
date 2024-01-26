import axios from 'axios';
import React, { useState, useEffect, createContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { URL, NODE_APP_PATH } from '../constant';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [feTodos, setFeTodos] = useState([])
  const [beTodos, setBeTodos] = useState([])
  const location = useLocation()

  //getting data from localStorage || database
  useEffect(() => {
    if (location.pathname === NODE_APP_PATH) {
      axios.get(URL).then(d => {
        console.log(d.data)
        setBeTodos(d.data)
      }).catch(e => console.log(e, 'error while getting data'))
    }
    else {
      const todoStore = JSON.parse(localStorage.getItem('todoStorage'))
      if (todoStore) setFeTodos(todoStore)
    }
  }, [location.pathname])

  //storing data in localStorage 
  useEffect(() => {
    localStorage.setItem('todoStorage', JSON.stringify(todos))
  }, [feTodos, location.pathname])

  const setTodos = location.pathname === NODE_APP_PATH ? setBeTodos : setFeTodos
  const todos = location.pathname === NODE_APP_PATH ? beTodos : feTodos

  const memoData = useMemo(() => ([todos, setTodos]), [todos])

  return (
    <DataContext.Provider value={memoData}>
      {props.children}
    </DataContext.Provider>

  )
}
