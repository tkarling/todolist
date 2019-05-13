import React, { useState, useEffect } from 'react'
import AddTodo from './AddTodo'
import Todos from '../components/Todos'

const STORAGE_KEY = 'todos' + 'CH'

// exported for storybook
export const useTodos = (storageKey: string, defaultTodos: Todo[] = []) => {
  const initialTodos = () =>
    JSON.parse(
      window.localStorage.getItem(storageKey) || JSON.stringify(defaultTodos)
    )
  const [todos, setTodos] = useState(initialTodos)
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const onAdd = (title: string) => {
    setTodos([{ id: new Date().getTime(), title, completed: false }, ...todos])
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
  return [todos, onAdd, onDelete, onToggle]
}

const TodoList = () => {
  const [todos, onAdd, onDelete, onToggle] = useTodos(STORAGE_KEY)
  return (
    <div>
      <header>Using Custom Hooks</header>
      <AddTodo onAdd={onAdd} />
      <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  )
}

export default TodoList
