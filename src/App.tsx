import React from 'react'
import './App.css'
import TodoListC from './containers/classicContainers/TodoList'
import TodoListH from './containers/hookContainers/TodoList'
import TodoListCH from './containers/customHookContainers/TodoList'
import TodoListCHR from './containers/reducerContainers/TodoList'
import TodoListCtx from './containers/withContextContainers/TodoList'
import TodoListOptCtx from './containers/withOptimizedContextContainers/TodoList'

import Login from './forms/Login'
import usePage from './hooks/usePage'

import IsMountedTest from './containers/classicContainers/IsMountedTest'

const App = () => {
  const { currentPage, nextPage } = usePage({
    pages: () => [
      <IsMountedTest />,
      <Login />,
      <TodoListC />,
      <TodoListH />,
      <TodoListCH />,
      <TodoListCHR />,
      <TodoListCtx />,
      <TodoListOptCtx />
    ],
    firstPage: 0
  })

  return (
    <div className="App">
      <div>
        <button onClick={nextPage}>swap</button>
      </div>
      {currentPage()}
    </div>
  )
}

export default App
