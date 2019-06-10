import React, { useState, useRef, useEffect } from 'react'
import AddTodo from '../components/AddTodo'
import useSize from '../customHookContainers/useSize'
import { connect, selectDispatchOnly } from './TodosContext'

export const useAddTodo = (dispatch: any) => {
  const inputRef: any = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const [title, setTitle] = useState('')
  const onChange = (title: string) => {
    setTitle(title)
  }

  const onAddAndEmpty = (title: string) => {
    dispatch({ type: 'add', title })
    setTitle('')
    inputRef.current.focus()
  }

  return [title, inputRef, onAddAndEmpty, onChange]
}

const AddToDoContainer = React.memo(({ dispatch }: any) => {
  const [title, inputRef, onAddAndEmpty, onChange] = useAddTodo(dispatch)
  const [size, ref] = useSize()
  console.log('renderctxadd')

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
})

export default connect(
  AddToDoContainer,
  selectDispatchOnly
)
