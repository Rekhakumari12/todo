import React,{useState,useEffect,createContext} from 'react'
export const DataContext = createContext();
export const DataProvider = (props) => {
  const [todos, setTodos] = useState([])
  //getting data from localStorage
  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem('todoStorage'))
    if(todoStore) setTodos(todoStore)
  }, [])
  //storing data in localStorage
  useEffect(() => {
    localStorage.setItem('todoStorage',JSON.stringify(todos))
  }, [todos])
  
  return (
      <DataContext.Provider value={[todos,setTodos]}>
        {props.children}
      </DataContext.Provider>
    
  )
}
