import React, { useState, useCallback } from 'react'
import { Item, MemoItem, ItemWState, MemoItemWState } from './Components'

const WithHooks = () => {
  console.log('render wh')
  const [inputs, setInputs] = useState({ one: '1', two: '2' })
  const [a, setA] = useState('1')
  const [b, setB] = useState('2')

  const setValue = useCallback((id: string, value: string) => {
    if (id === 'a') {
      setA(value)
    } else if (id === 'b') {
      setB(value)
    } else {
      setInputs(i => ({ ...i, id: value }))
    }
  }, [])
  return (
    <div>
      <h1>Testing w Hooks</h1>
      <Item title="No Memo:" id="a" value={a} onClick={setValue} />
      <MemoItem title="With Memo:" id="b" value={b} onClick={setValue} />
      <hr />
      <Item
        title="Inputs No Memo:"
        id="one"
        value={inputs['one']}
        onClick={setValue}
      />
      <MemoItem
        title="Inputs With Memo:"
        id="two"
        value={inputs['two']}
        onClick={setValue}
      />
      <hr />
      <ItemWState title="Local state" />
      <MemoItemWState title="Local state with Memo" />
    </div>
  )
}

export default WithHooks
