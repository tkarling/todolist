import React from 'react'

import TodosContext, { useTodosFromStorage } from './TodosContext'

import AddTodo from './AddTodo'
import Todos from './Todos'

// exported for testing
export const STORAGE_KEY = 'todosCtx'

const TodoList = () => {
  const todosContext = useTodosFromStorage(STORAGE_KEY)
  return (
    <div>
      <header>Using Context with Reducer</header>
      <TodosContext.Provider value={todosContext}>
        <AddTodo />
        <Todos />
      </TodosContext.Provider>
    </div>
  )
}

export default TodoList
