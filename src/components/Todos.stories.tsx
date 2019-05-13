import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Todos from './Todos'
import { useTodos } from '../customHookContainers/TodoList'
const STORAGE_KEY = 'todos' + 'SB'

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
  const [todos, onAdd, onDelete, onToggle] = useTodos(
    STORAGE_KEY,
    DEFAULT_TODOS
  )
  return <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
}

storiesOf('Todos', module)
  .add('empty list', () => <Todos />)
  .add('with items', () => <TodosContainer />)
