import React, { Component } from 'react'
import { Item, MemoItem, ItemWState, MemoItemWState } from './Components'

class NoHooks extends Component<
  {},
  { a: string; b: string; inputs: { one: string; two: string } }
> {
  state = { a: '1', b: '1', inputs: { one: '1', two: '2' } }

  setValue = (id: string, value: string) => {
    if (id === 'a') {
      this.setState({ a: value })
    } else if (id === 'b') {
      this.setState({ b: value })
    } else {
      const { inputs } = this.state
      this.setState({ inputs: { ...inputs, [id]: value } })
    }
  }

  render() {
    const { a, b, inputs } = this.state
    return (
      <div>
        <h1>Testing w Classes</h1>
        <Item title="No Memo:" id="a" value={a} onClick={this.setValue} />
        <MemoItem title="With Memo:" id="b" value={b} onClick={this.setValue} />
        <hr />
        <Item
          title="Inputs No Memo:"
          id="one"
          value={inputs['one']}
          onClick={this.setValue}
        />
        <MemoItem
          title="Inputs With Memo:"
          id="two"
          value={inputs['two']}
          onClick={this.setValue}
        />
        <hr />
        <ItemWState title="Local state" />
        <MemoItemWState title="Local state with Memo" />
      </div>
    )
  }
}

export default NoHooks
