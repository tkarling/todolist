import React from 'react'

import { TodosContext, useTodosFromStorage } from './TodosContext'

import AddTodo from './AddTodo'
import Todos from './Todos'

const STORAGE_KEY = 'todos' + 'Ctx'

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
