import React, { useReducer } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Todos from '.'
import todosReducer from '../../containers/reducerContainers/todosReducer'

const DEFAULT_TODOS: Todo[] = [
  {
    id: '1',
    title: 'moi',
    completed: false
  },
  {
    id: '2',
    title: 'hei',
    completed: false
  }
]

const TodosContainer = ({}) => {
  const [todos, dispatch] = useReducer(todosReducer, DEFAULT_TODOS)

  return (
    <Todos
      todos={todos as any}
      onDelete={(todo: Todo) => dispatch({ type: 'delete', todo })}
      onToggle={(todo: Todo) => dispatch({ type: 'toggle', todo })}
    />
  )
}

storiesOf('Todos with useReducer', module).add('with items', () => (
  <TodosContainer />
))

storiesOf('Todos', module)
  .add('empty list', () => <Todos />)
  .add('with items', () => (
    <Todos
      todos={DEFAULT_TODOS}
      onDelete={action('Deleted')}
      onToggle={action('Toggled')}
    />
  ))
