import React, { useState } from 'react'
export default function ListItem(props) {
  const { todo, id, checkComplete, handleEditTodos, key } = props
  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)
  const handleOnEdit = () => {
    setOnEdit(true)
  }
  const handleSave = (id) => {
    setOnEdit(false)
    if (editValue) {
      //if inputField has value
      handleEditTodos(editValue, id)
    } else {
      setEditValue(todo.name)
    }
  }
  if (onEdit) {
    return (
      <li key={key}>
        {/* when click onEdit checkbox changes into input field */}
        <input
          type="text"
          id={id}
          onChange={(e) => setEditValue(e.target.value.toLowerCase())}
          name="editValue"
          value={editValue}
        />
        {todo.name}
        <button onClick={() => handleSave(id)}>Save <i className="far fa-edit"></i></button>
      </li>
    )
  } else {
    return (
      <li key={key}>
        {/* if isCompleted has true then active will apply, it will cut the item */}
        <label htmlFor={id} className={todo.isCompleted ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            onChange={() => checkComplete(id, todo)}
            checked={todo.isCompleted}
          />
          {todo.name}
        </label>
        <button disabled={todo.isCompleted} onClick={handleOnEdit}>Edit <i className="far fa-edit"></i></button>
      </li>
    )
  }
}
