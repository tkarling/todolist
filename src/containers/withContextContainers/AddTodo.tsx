import React, { useContext } from 'react'

import useSize from '../../hooks/useSize'
import useInput from '../../hooks/useInput'

import TodosContext from './TodosContext'
import { ACTIONS } from '../../reducers/todosReducer'

import AddTodo from '../../components/AddTodo'

const AddToDoContainer = () => {
  const { dispatch } = useContext(TodosContext)
  const [title, inputRef, { onSubmit, onChange }] = useInput(() =>
    dispatch({ type: ACTIONS.add, title })
  )
  const [size, ref] = useSize()

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
