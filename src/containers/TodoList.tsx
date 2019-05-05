import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Todos from '../components/Todos'

let id = 0
const getId = () => ++id + ''
const STORAGE_KEY = 'todos'

interface TodoListState {
  todos: Todo[]
}

export default class TodoList extends Component {
  state: TodoListState = {
    todos: []
  }

  componentDidMount() {
    const todos = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    this.setState({ todos })
  }

  componentDidUpdate(prevProps: {}, prevState: TodoListState) {
    if (prevState.todos !== this.state.todos) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todos))
    }
  }

  onAdd = (title: string) => {
    const { todos } = this.state
    this.setState({
      todos: [{ id: getId(), title, completed: false }, ...todos]
    })
  }

  onDelete = (todoToDelete: Todo) => {
    const { todos } = this.state
    this.setState({ todos: todos.filter(todo => todo.id !== todoToDelete.id) })
  }

  onToggle = (todoToToggle: Todo) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(todo =>
        todo.id !== todoToToggle.id
          ? todo
          : { ...todo, completed: !todo.completed }
      )
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <header>Using Classic</header>
        <AddTodo onAdd={this.onAdd} />
        <Todos
          todos={todos}
          onDelete={this.onDelete}
          onToggle={this.onToggle}
        />
      </div>
    )
  }
}
