import React from 'react'
import FormInput from '../components/FormInput'
import List from '../components/List'
import Footer from '../components/Footer'
import { DataProvider } from '../context/DataProvider'
function ReactTodo() {
  return (
    <DataProvider>
      <div className="App">
        <h1>React To Do List</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}


export default ReactTodo;
