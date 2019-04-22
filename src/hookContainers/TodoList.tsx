import React, { useState } from 'react'
import AddTodo from './AddTodo'
import Todos from '../components/Todos'

let id = 0
const getId = () => ++id + ''

const SAMPLE_TODOS = [
  { id: getId(), title: 'hello', completed: false },
  { id: getId(), title: 'moi', completed: true }
]

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS)

  const onAdd = (title: string) => {
    setTodos([{ id: getId(), title, completed: false }, ...todos])
  }

  const onDelete = (todoToDelete: Todo) => {
    setTodos(todos.filter(todo => todo.id !== todoToDelete.id))
  }

  const onToggle = (todoToToggle: Todo) => {
    setTodos(
      todos.map(todo =>
        todo.id !== todoToToggle.id
          ? todo
          : { ...todo, completed: !todo.completed }
      )
    )
  }

  return (
    <div>
      <header>Using Hooks</header>
      <AddTodo onAdd={onAdd} />
      <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  )
}

export default TodoList
