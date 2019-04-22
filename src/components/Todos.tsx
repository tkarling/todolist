import React, { Component } from 'react'

const Todos = ({
  todos,
  onDelete,
  onToggle
}: {
  todos: any[]
  onDelete: Function
  onToggle: Function
}) => (
  <div>
    {todos.map(todo => (
      <div key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={event => onToggle(todo)}
        />{' '}
        {todo.title} <button onClick={event => onDelete(todo)}>delete</button>
      </div>
    ))}
  </div>
)

export default Todos
