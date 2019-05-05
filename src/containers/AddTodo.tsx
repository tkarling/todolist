import React, { Component, createRef } from 'react'
import AddTodo from '../components/AddTodo'

class AddToDoContainer extends Component<
  { onAdd: Function },
  { title: string }
> {
  inputRef: any = createRef()
  state = { title: '' }

  componentDidMount() {
    this.inputRef.current.focus()
  }

  onAdd = (title: string) => {
    this.props.onAdd(title)
    this.setState({ title: '' })
    this.inputRef.current.focus()
  }

  onChange = (title: string) => {
    this.setState({ title })
  }

  render() {
    const { title } = this.state
    return (
      <AddTodo
        inputRef={this.inputRef}
        onAdd={this.onAdd}
        onChange={this.onChange}
        title={title}
      />
    )
  }
}

export default AddToDoContainer
