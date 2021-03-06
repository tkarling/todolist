import React from 'react'

import useSize from '../../hooks/useSize'
import useInput from '../../hooks/useInput'
import { ACTIONS } from '../../reducers/todosReducer'

import { connect, useSelectDispatchOnly } from './TodosContext'

import AddTodo from '../../components/AddTodo'

const AddToDoContainer = React.memo(({ dispatch }: any) => {
  const [title, inputRef, { onSubmit, onChange }] = useInput(
    () => dispatch({ type: ACTIONS.add, title }),
    true
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
})

export default connect(
  AddToDoContainer,
  useSelectDispatchOnly
)
