import React, { useState } from 'react'
import './App.css'
import TodoListC from './containers/TodoList'
import TodoListH from './hookContainers/TodoList'
import TodoListCH from './customHookContainers/TodoList'
import TodoListCHR from './reducerContainers/TodoList'
import TodoListCtx from './withContextContainers/TodoList'

const App = () => {
  const [type, setType] = useState('reducerHooks')

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
    </div>
  )
}

export default App
