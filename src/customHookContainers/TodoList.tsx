import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'
import AddTodo from './AddTodo'
import Todos from '../components/Todos'

// exported for storybook
export const useTodos = (defaultTodos: Todo[] = []) => {
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

const STORAGE_KEY = 'todos' + 'CH'

const TodoList = () => {
  const [storedTodos, setStoredTodos] = useLocalStorage(STORAGE_KEY)
  const [todos, onAddR, onDeleteR, onToggleR] = useTodos(storedTodos)

  const onAdd = (title: string) => {
    onAddR(title)
    setStoredTodos(todos)
  }
  const onDelete = (todo: Todo) => {
    onDeleteR(todo)
    setStoredTodos(todos)
  }
  const onToggle = (todo: Todo) => {
    onToggleR(todo)
    setStoredTodos(todos)
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
