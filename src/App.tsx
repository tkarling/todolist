import React, { useState } from 'react'
import './App.css'
import TodoListC from './containers/TodoList'
import TodoList from './hookContainers/TodoList'

const App = () => {
  const [type, setType] = useState('hooks')

  const toggleType = () =>
    type === 'hooks' ? setType('classic') : setType('hooks')

  return (
    <div>
      <div className="App">
        <div>
          <button onClick={toggleType}>swap</button>
        </div>
        {type === 'hooks' ? <TodoList /> : <TodoListC />}
      </div>
    </div>
  )
}

export default App
