import React from 'react'
import { ADD_TODO_TEXTS as TEXTS } from '../texts'

import styles from './AddTodo.module.css'

const AddTodo = ({
  title,
  inputRef,
  onAdd,
  onChange,
  width
}: {
  title?: string
  inputRef?: any
  onAdd?: Function
  onChange?: Function
  width?: number
}) => {
  const onSubmit = (event: any) => {
    event.preventDefault()
    if (onAdd && title && title.length) {
      onAdd(title)
    }
  }
  const onInputChange = (event: any) =>
    onChange && event.keyCode !== 13
      ? onChange(event.target.value)
      : onSubmit(event)

  const backgroundColor = width && width > 300 ? 'purple' : undefined
  return (
    <form
      className={styles.AddTodo}
      style={{ backgroundColor }}
      onSubmit={onSubmit}
    >
      <input
        className={styles.AddTodoInputBox}
        ref={inputRef}
        placeholder={TEXTS.placeHolder}
        value={title}
        onChange={onInputChange}
      />
      <input
        className={styles.AddTodoSubmit}
        type="submit"
        value={TEXTS.submitButton}
      />
    </form>
  )
}

export default AddTodo
