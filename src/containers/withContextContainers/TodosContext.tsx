import { useReducer, useEffect } from 'react'
import { createContext } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import reducer from '../../reducers/todosReducer'

const TodosContext: any = createContext([])

export const useTodosFromStorage = (storageKey: string) => {
  const [storedTodos, setStoredTodos] = useLocalStorage(storageKey, [])
  const [todos, dispatch] = useReducer(reducer, [], () => storedTodos)

  useEffect(() => {
    setStoredTodos(todos)
  }, [todos, setStoredTodos])

  return {
    todos,
    dispatch
  }
}

export default TodosContext
