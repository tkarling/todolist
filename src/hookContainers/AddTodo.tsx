import React, { useState, useRef, useEffect } from 'react'
import AddTodo from '../components/AddTodo'

const AddToDoContainer = (props: { onAdd: Function }) => {
  const [title, setTitle] = useState('')

  const inputRef: any = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const onAdd = (title: string) => {
    props.onAdd(title)
    setTitle('')
    inputRef.current.focus()
  }

  const onChange = (title: string) => {
    setTitle(title)
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
