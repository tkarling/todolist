import React from 'react'
import styles from './Todos.module.css'

const Todos = ({
  todos = [],
  onDelete,
  onToggle
}: {
  todos?: any[]
  onDelete?: Function
  onToggle?: Function
}) => (
  <div className={styles.Todos}>
    {todos.length ? (
      todos.map(todo => (
        <div className={styles.TodosRow} key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={event => onToggle && onToggle(todo)}
          />{' '}
          <span className={styles.TodosTitle}>{todo.title} </span>
          <button
            className={styles.TodosDelete}
            onClick={event => onDelete && onDelete(todo)}
          >
            x
          </button>
        </div>
      ))
    ) : (
      <span className={styles.TodosEmpty}>No items on this list </span>
    )}
  </div>
)

export default Todos
