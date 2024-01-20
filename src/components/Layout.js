import React from 'react'
import FormInput from './FormInput'
import List from './List'
import Footer from './Footer'
import { DataProvider } from './DataProvider'
function Layout({ title }) {
  return (
    <DataProvider>
      <div className="App">
        <h1>{title} To Do List</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}


export default Layout;
