import React from 'react'
import './App.css'
import TodoListC from './containers/classicContainers/TodoList'
import TodoListH from './containers/hookContainers/TodoList'
import TodoListCH from './containers/customHookContainers/TodoList'
import TodoListCHR from './containers/reducerContainers/TodoList'
import TodoListCtx from './containers/withContextContainers/TodoList'
import TodoListOptCtx from './containers/withOptimizedContextContainers/TodoList'

import WithHooks from './experimental/renderPerformance/WithHooks'
import NoHooks from './experimental/renderPerformance/NoHooks'

import Login from './forms/Login'
import usePage from './hooks/usePage'

import IsMountedTest from './containers/classicContainers/IsMountedTest'

const App = () => {
  const { currentPage, nextPage, prevPage } = usePage({
    pages: () => [
      <WithHooks />,
      <NoHooks />,
      <TodoListH />,
      <TodoListC />,
      <IsMountedTest />,
      <Login />,
      <TodoListCH />,
      <TodoListCHR />,
      <TodoListCtx />,
      <TodoListOptCtx />
    ],
    firstPage: 0
  })

  console.log('render app')
  return (
    <div className="App">
      <div>
        <button onClick={prevPage}>prev</button>
        <button style={{ marginLeft: 10 }} onClick={nextPage}>
          next
        </button>
      </div>
      {currentPage()}
    </div>
  )
}

export default App
