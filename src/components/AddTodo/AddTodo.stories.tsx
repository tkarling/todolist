import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import AddTodo from '.'
import useInput from '../../hooks/useInput'

const AddTodoContainer = ({}) => {
  const [title, inputRef, { onSubmit, onChange }] = useInput(action('added'))
  return (
    <AddTodo
      inputRef={inputRef}
      onAdd={onSubmit}
      onChange={onChange}
      title={title}
    />
  )
}

storiesOf('AddTodo with hook', module).add('default', () => (
  <AddTodoContainer />
))
