import React from 'react'
import { TODOS_TEXTS as TEXTS } from '../texts'
import styles from './Todos.module.css'
import Button from '../Button'

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
          <div>
            <input
              type="checkbox"
              role="checkbox"
              checked={todo.completed}
              onChange={event => onToggle && onToggle(todo)}
            />
          </div>
          <span className={styles.TodosTitle}>{todo.title} </span>
          <Button type="danger" onClick={event => onDelete && onDelete(todo)}>
            X
          </Button>
        </div>
      ))
    ) : (
      <span className={styles.TodosEmpty}>{TEXTS.noItems}</span>
    )}
  </div>
)

export default Todos
