import React, { useReducer, useEffect, useContext, useMemo } from 'react'
import { createContext } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import reducer from '../../reducers/todosReducer'

const TodosContext: any = createContext([])

export const useTodosFromStorage = (storageKey: string) => {
  const [storedTodos, setStoredTodos] = useLocalStorage(storageKey, [])
  const [todos, dispatch] = useReducer(reducer, [], () => storedTodos)

  useEffect(() => {
    setStoredTodos(todos)
  }, [todos])

  return {
    todos,
    dispatch
  }
}

// from https://stackoverflow.com/questions/51317371/react-context-api-and-avoiding-re-renders
export function selectDispatchOnly() {
  const { dispatch } = useContext(TodosContext)
  return {
    dispatch
  }
}

export function connect(WrappedComponent: any, select: any) {
  return function(props: any) {
    const selectors = select()
    return <WrappedComponent {...selectors} {...props} />
  }
}

export default TodosContext
