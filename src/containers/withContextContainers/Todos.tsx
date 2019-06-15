import React, { useContext, useCallback } from 'react'
import Todos from '../../components/Todos'
import TodosContext from './TodosContext'

const TodosContainer = () => {
  const { todos, dispatch } = useContext(TodosContext)
  const onDelete = useCallback((todo: Todo) => {
    dispatch({ type: 'delete', todo })
  }, [])
  const onToggle = useCallback((todo: Todo) => {
    dispatch({ type: 'toggle', todo })
  }, [])

  return <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
}

export default TodosContainer
