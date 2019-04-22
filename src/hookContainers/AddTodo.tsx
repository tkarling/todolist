import React, { useState } from 'react'
import AddTodo from '../components/AddTodo'

const AddToDoContainer = ({ onAdd }: { onAdd: Function }) => {
  const [title, setTitle] = useState('')

  const myOnAdd = (title: string) => {
    onAdd(title)
    setTitle('')
  }

  const onChange = (title: string) => {
    setTitle(title)
  }

  return <AddTodo onAdd={myOnAdd} onChange={onChange} title={title} />
}

export default AddToDoContainer
