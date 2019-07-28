import React, { useState, useEffect } from 'react'

import useLocalStorage from '../../hooks/useLocalStorage'

import AddTodo from './AddTodo'
import Todos from '../../components/Todos'

const useTodos = (defaultTodos: Todo[] = []) => {
  const [todos, setTodos] = useState(defaultTodos)

  const onAdd = (title: string) => {
    setTodos([
      { id: new Date().getTime() + '', title, completed: false },
      ...todos
    ])
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
  return [todos, onAdd, onDelete, onToggle] as any
}

const STORAGE_KEY = 'todosCH'

const TodoList = () => {
  const [storedTodos, setStoredTodos] = useLocalStorage(STORAGE_KEY, [])
  const [todos, onAddR, onDeleteR, onToggleR] = useTodos(storedTodos)

  useEffect(() => {
    setStoredTodos(todos)
  }, [setStoredTodos, todos])

  const onAdd = (title: string) => {
    onAddR(title)
  }
  const onDelete = (todo: Todo) => {
    onDeleteR(todo)
  }
  const onToggle = (todo: Todo) => {
    onToggleR(todo)
  }

  return (
    <div>
      <header>Using Custom Hooks</header>
      <AddTodo onAdd={onAdd} />
      <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  )
}

export default TodoList
