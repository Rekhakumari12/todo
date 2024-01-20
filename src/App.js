import React from 'react'
import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <>
      <nav>
        <center>
          <Link to={`reactTodo`}>React Todo</Link>
          &nbsp;
          <Link to={`nodeTodo`}>Node Todo</Link>
        </center>
      </nav>
      <Outlet />
    </>
  );
}


export default App;
