import React, { useContext } from 'react'

import useSize from '../../hooks/useSize'
import useInput from '../../hooks/useInput'

import TodosContext from './TodosContext'

import AddTodo from '../../components/AddTodo'

const AddToDoContainer = () => {
  const { dispatch } = useContext(TodosContext)
  const [title, inputRef, { onSubmit, onChange }] = useInput(() =>
    dispatch({ type: 'add', title })
  )
  const [size, ref] = useSize()
  console.log('renderctxadd')

  return (
    <div ref={ref as any}>
      <AddTodo
        inputRef={inputRef}
        onAdd={onSubmit}
        onChange={onChange}
        title={title}
        width={(size as any).width}
      />
    </div>
  )
}

export default AddToDoContainer
