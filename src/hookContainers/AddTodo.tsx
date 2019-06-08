import React, { useState, useRef, useEffect } from 'react'
import AddTodo from '../components/AddTodo'

const AddToDoContainer = (props: { onAdd: Function }) => {
  const inputRef: any = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const [title, setTitle] = useState('')
  const onChange = (title: string) => {
    setTitle(title)
  }

  const onAdd = (title: string) => {
    props.onAdd(title)
    setTitle('')
    inputRef.current.focus()
  }

  return (
    <AddTodo
      inputRef={inputRef}
      onAdd={onAdd}
      onChange={onChange}
      title={title}
    />
  )
}

export default AddToDoContainer
