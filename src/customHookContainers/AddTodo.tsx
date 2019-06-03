import React, { useState, useRef, useEffect } from 'react'
import AddTodo from '../components/AddTodo'
import useSize from './useSize'

// exported for storybook
export const useAddTodo = (onAdd: (title: string) => void) => {
  const [title, setTitle] = useState('')

  const inputRef: any = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const onAddAndEmpty = (title: string) => {
    onAdd(title)
    setTitle('')
    inputRef.current.focus()
  }

  const onChange = (title: string) => {
    setTitle(title)
  }
  return [title, inputRef, onAddAndEmpty, onChange]
}

const AddToDoContainer = ({ onAdd }: { onAdd: (title: string) => void }) => {
  const [title, inputRef, onAddAndEmpty, onChange] = useAddTodo(onAdd)
  const [size, ref] = useSize()
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

export default AddToDoContainer
