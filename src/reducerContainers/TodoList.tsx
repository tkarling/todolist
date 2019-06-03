import React, { useReducer } from 'react'
import useLocalStorage from '../customHookContainers/useLocalStorage'
import AddTodo from '../customHookContainers/AddTodo'
import Todos from '../components/Todos'

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add':
      return [
        { id: new Date().getTime(), title: action.title, completed: false },
        ...state
      ]
    case 'delete':
      return state.filter((todo: Todo) => todo.id !== action.todo.id)
    case 'toggle':
      return state.map((todo: Todo) =>
        todo.id !== action.todo.id
          ? todo
          : { ...todo, completed: !todo.completed }
      )

    default:
      console.log('unknown action ', action)
      return state
  }
}

const STORAGE_KEY = 'todos' + 'CHR'

const TodoList = () => {
  const [storedTodos, setStoredTodos] = useLocalStorage(STORAGE_KEY)
  const [todos, dispatch] = useReducer(reducer, storedTodos)

  const onAdd = (title: string) => {
    dispatch({ type: 'add', title })
    setStoredTodos(todos)
  }
  const onDelete = (todo: Todo) => {
    dispatch({ type: 'delete', todo })
    setStoredTodos(todos)
  }
  const onToggle = (todo: Todo) => {
    dispatch({ type: 'toggle', todo })
    setStoredTodos(todos)
  }

  return (
    <div>
      <header>Using Custom Hooks with Reducer</header>
      <AddTodo onAdd={onAdd} />
      <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  )
}

export default TodoList
