import React, { Component } from 'react'
import AddTodo from '../components/AddTodo'

class AddToDoContainer extends Component<
  { onAdd: Function },
  { title: string }
> {
  state = { title: '' }

  onAdd = (title: string) => {
    this.props.onAdd(title)
    this.setState({ title: '' })
  }

  onChange = (title: string) => {
    this.setState({ title })
  }

  render() {
    const { title } = this.state
    return <AddTodo onAdd={this.onAdd} onChange={this.onChange} title={title} />
  }
}

export default AddToDoContainer
