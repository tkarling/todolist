import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Todos from './Todos'

const todos: Todo[] = [
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

storiesOf('Todos', module)
  .add('empty list', () => <Todos />)
  .add('with items', () => <Todos todos={todos} />)
