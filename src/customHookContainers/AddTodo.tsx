import React, { useState, useRef, useEffect } from 'react'
import AddTodo from '../components/AddTodo'

// exported for storybook
export const useAddTodo = (onAdd: Function) => {
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

const AddToDoContainer = ({ onAdd }: { onAdd: Function }) => {
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

export default AddToDoContainer
