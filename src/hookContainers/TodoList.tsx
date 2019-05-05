import React, { useState, useEffect } from 'react'
import AddTodo from './AddTodo'
import Todos from '../components/Todos'

let id = 0
const getId = () => ++id + ''
const STORAGE_KEY = 'todos' + 'H'

const TodoList = () => {
  const initialTodos = () =>
    JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  const [todos, setTodos] = useState(initialTodos)
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const onAdd = (title: string) => {
    setTodos([{ id: getId(), title, completed: false }, ...todos])
  }

  const onDelete = (todoToDelete: Todo) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== todoToDelete.id))
  }

  const onToggle = (todoToToggle: Todo) => {
    setTodos(
      todos.map((todo: Todo) =>
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
