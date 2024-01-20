import React from 'react'
import FormInput from '../components/FormInput'
import List from '../components/List'
import Footer from '../components/Footer'
import { DataProvider } from '../context/DataProvider'
function NodeTodo() {
  return (
    <DataProvider>
      <div className="App">
        <h1>Node To Do List</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}


export default NodeTodo;
