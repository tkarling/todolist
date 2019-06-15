import React, { useReducer, useEffect, useCallback } from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import reducer from './todosReducer'

import AddTodo from './AddTodo'
import Todos from '../components/Todos'

const STORAGE_KEY = 'todos' + 'CHR'

const TodoList = () => {
  const [storedTodos, setStoredTodos] = useLocalStorage(STORAGE_KEY)
  const [todos, dispatch] = useReducer(reducer, [], () => storedTodos)

  useEffect(() => {
    setStoredTodos(todos)
  }, [todos])

  const onAdd = useCallback((title: string) => {
    dispatch({ type: 'add', title })
  }, [])
  const onDelete = useCallback((todo: Todo) => {
    dispatch({ type: 'delete', todo })
  }, [])
  const onToggle = useCallback((todo: Todo) => {
    dispatch({ type: 'toggle', todo })
  }, [])

  return (
    <div>
      <header>Using Custom Hooks with Reducer</header>
      <AddTodo onAdd={onAdd} />
      <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  )
}

export default TodoList