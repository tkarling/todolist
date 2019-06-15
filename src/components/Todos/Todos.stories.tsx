import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Todos from '.'
import { useTodos } from '../../containers/customHookContainers/TodoList'

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
  const [todos, onAdd, onDelete, onToggle] = useTodos(DEFAULT_TODOS)
  return (
    <Todos
      todos={todos as any}
      onDelete={onDelete as any}
      onToggle={onToggle as any}
    />
  )
}

storiesOf('Todos with Container', module).add('with items', () => (
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
