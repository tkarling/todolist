import React, { useState } from 'react'
import './App.css'
import TodoListC from './containers/TodoList'
import TodoListH from './hookContainers/TodoList'
import TodoListCH from './customHookContainers/TodoList'

const App = () => {
  const [type, setType] = useState('customHooks')

  const toggleType = () =>
    type === 'classic'
      ? setType('hooks')
      : type === 'hooks'
      ? setType('customHooks')
      : setType('classic')

  return (
    <div className="App">
      <div>
        <button onClick={toggleType}>swap</button>
      </div>
      {type === 'classic' && <TodoListC />}
      {type === 'hooks' && <TodoListH />}
      {type === 'customHooks' && <TodoListCH />}
    </div>
  )
}

export default App
