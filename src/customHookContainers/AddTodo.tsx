import React, { useState, useRef, useEffect } from 'react'

import useSize from '../hooks/useSize'

import AddTodo from '../components/AddTodo'

// exported for storybook
export const useAddTodo = (onAdd: (title: string) => void) => {
  const inputRef: any = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const [title, setTitle] = useState('')
  const onChange = (title: string) => {
    setTitle(title)
  }

  const onAddAndEmpty = (title: string) => {
    onAdd(title)
    setTitle('')
    inputRef.current.focus()
  }

  return [title, inputRef, onAddAndEmpty, onChange]
}

const AddToDoContainer = React.memo(
  ({ onAdd }: { onAdd: (title: string) => void }) => {
    const [title, inputRef, onAddAndEmpty, onChange] = useAddTodo(onAdd)
    const [size, ref] = useSize()
    console.log('renderadd')

    return (
      <div ref={ref as any}>
        <AddTodo
          inputRef={inputRef}
          onAdd={onAddAndEmpty}
          onChange={onChange}
          title={title}
          width={(size as any).width}
        />
      </div>
    )
  }
)

export default AddToDoContainer
