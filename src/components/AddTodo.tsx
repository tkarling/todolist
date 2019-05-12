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
    if (onAdd) {
      onAdd(title)
    }
  }
  const onInputChange = (event: any) =>
    onChange && event.keyCode !== 13
      ? onChange(event.target.value)
      : onSubmit(event)
  return (
    <form onSubmit={onSubmit}>
      <input
        className={styles.inputBox}
        ref={inputRef}
        placeholder="add todo"
        value={title}
        onChange={onInputChange}
      />
      <input className={styles.submit} type="submit" value="submit" />
    </form>
  )
}

export default AddTodo
