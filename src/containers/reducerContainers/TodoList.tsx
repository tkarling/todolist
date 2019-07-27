import React, { useReducer, useEffect, useCallback } from 'react'

import useLocalStorage from '../../hooks/useLocalStorage'
import reducer, { ACTIONS } from '../../reducers/todosReducer'

import AddTodo from './AddTodo'
import Todos from '../../components/Todos'

const STORAGE_KEY = 'todosCHR'

const TodoList = () => {
  const [storedTodos, setStoredTodos] = useLocalStorage(STORAGE_KEY)
  const [todos, dispatch] = useReducer(reducer, [], () => storedTodos)

  useEffect(() => {
    setStoredTodos(todos)
  }, [setStoredTodos, todos])

  const onAdd = useCallback((title: string) => {
    dispatch({ type: ACTIONS.add, title })
  }, [])
  const onDelete = useCallback((todo: Todo) => {
    dispatch({ type: ACTIONS.delete, todo })
  }, [])
  const onToggle = useCallback((todo: Todo) => {
    dispatch({ type: ACTIONS.toggle, todo })
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
