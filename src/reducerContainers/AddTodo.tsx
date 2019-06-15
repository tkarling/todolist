import React from 'react'

import useInput from '../hooks/useInput'
import useSize from '../hooks/useSize'

import AddTodo from '../components/AddTodo'

const AddToDoContainer = React.memo(
  ({ onAdd }: { onAdd: (title: string) => void }) => {
    const [title, inputRef, { onSubmit, onChange }] = useInput(onAdd, true)
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
)

export default AddToDoContainer
