import React, { Component, createRef } from 'react'
import elementResizeEvent from 'element-resize-event'

class Size extends Component<
  { children: any },
  { height: number; width: number }
> {
  state = { height: 0, width: 0 }
  ref: any = createRef()

  updateSize = () => {
    const element = this.ref.current
    this.setState({ height: element.clientHeight, width: element.clientWidth })
  }

  componentDidMount() {
    this.updateSize()
    const element = this.ref.current
    elementResizeEvent(element, this.updateSize)
  }

  componentWillUnmount() {
    elementResizeEvent.unbind(this.ref.current, this.updateSize)
  }

  render() {
    return <div ref={this.ref}>{this.props.children(this.state)}</div>
  }
}

export default Size
