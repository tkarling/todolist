import React from 'react'
import styles from './AddTodo.module.css'

const AddTodo = ({
  onAdd,
  onChange,
  title,
  inputRef
}: {
  title?: string
  inputRef?: any
  onAdd?: Function
  onChange?: Function
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
  return (
    <form className={styles.AddTodo} onSubmit={onSubmit}>
      <input
        className={styles.AddTodoInputBox}
        ref={inputRef}
        placeholder="add todo"
        value={title}
        onChange={onInputChange}
      />
      <input className={styles.AddTodoSubmit} type="submit" value="submit" />
    </form>
  )
}

export default AddTodo
