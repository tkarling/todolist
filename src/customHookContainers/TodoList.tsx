import React, { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import AddTodo from './AddTodo'
import Todos from '../components/Todos'

// exported for storybook
export const useTodos = ({
  defaultTodos = [],
  storageKey = ''
}: {
  defaultTodos?: Todo[]
  storageKey?: string
}) => {
  const [todos, setTodos] = storageKey
    ? useLocalStorage(storageKey, defaultTodos)
    : useState(defaultTodos)

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

const STORAGE_KEY = 'todos' + 'CH'

const TodoList = () => {
  const [todos, onAdd, onDelete, onToggle] = useTodos({
    storageKey: STORAGE_KEY
  })
  return (
    <div>
      <header>Using Custom Hooks</header>
      <AddTodo onAdd={onAdd} />
      <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  )
}

export default TodoList
