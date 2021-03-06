// Note! this file is same as ../withContextContainers/Todos
// But it needs to be copied to use the context in this dir

import React, { useContext, useCallback } from 'react'

import { ACTIONS } from '../../reducers/todosReducer'

import Todos from '../../components/Todos'
import TodosContext from './TodosContext'

const TodosContainer = () => {
  const { todos, dispatch } = useContext(TodosContext)
  const onDelete = useCallback(
    (todo: Todo) => {
      dispatch({ type: ACTIONS.delete, todo })
    },
    [dispatch]
  )
  const onToggle = useCallback(
    (todo: Todo) => {
      dispatch({ type: ACTIONS.toggle, todo })
    },
    [dispatch]
  )

  return <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
}

export default TodosContainer
