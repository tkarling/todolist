import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import AddTodo from './AddTodo'
import { useAddTodo } from '../customHookContainers/AddTodo'

const AddTodoContainer = ({}) => {
  const onAdd = (title: string) => console.log('added: ' + title)
  const [title, inputRef, onAddAndEmpty, onChange] = useAddTodo(onAdd)
  return (
    <AddTodo
      inputRef={inputRef}
      onAdd={onAddAndEmpty}
      onChange={onChange}
      title={title}
    />
  )
}

storiesOf('AddTodo', module).add('default', () => <AddTodoContainer />)
