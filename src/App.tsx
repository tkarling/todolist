import React, { useState } from 'react'
import './App.css'
import TodoListC from './containers/classicContainers/TodoList'
import TodoListH from './containers/hookContainers/TodoList'
import TodoListCH from './containers/customHookContainers/TodoList'
import TodoListCHR from './containers/reducerContainers/TodoList'
import TodoListCtx from './containers/withContextContainers/TodoList'
import TodoListOptCtx from './containers/withOptimizedContextContainers/TodoList'

const App = () => {
  const [type, setType] = useState('optContextHooks')

  const toggleType = () => {
    switch (type) {
      case 'classic':
        setType('hooks')
        break
      case 'hooks':
        setType('customHooks')
        break
      case 'customHooks':
        setType('reducerHooks')
        break
      case 'reducerHooks':
        setType('contextHooks')
        break
      case 'contextHooks':
        setType('optContextHooks')
        break
      default:
        setType('classic')
        break
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={toggleType}>swap</button>
      </div>
      {type === 'classic' && <TodoListC />}
      {type === 'hooks' && <TodoListH />}
      {type === 'customHooks' && <TodoListCH />}
      {type === 'reducerHooks' && <TodoListCHR />}
      {type === 'contextHooks' && <TodoListCtx />}
      {type === 'optContextHooks' && <TodoListOptCtx />}
    </div>
  )
}

export default App
