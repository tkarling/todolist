const todosReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add':
      return [
        { id: new Date().getTime(), title: action.title, completed: false },
        ...state
      ]
    case 'delete':
      return state.filter((todo: Todo) => todo.id !== action.todo.id)
    case 'toggle':
      return state.map((todo: Todo) =>
        todo.id !== action.todo.id
          ? todo
          : { ...todo, completed: !todo.completed }
      )

    default:
      console.log('unknown action ', action)
      return state
  }
}

export default todosReducer
