import React, { useState, useCallback } from 'react'
import {
  Item,
  MemoItem,
  ItemWState,
  MemoItemWState,
  ItemWObject,
  MemoItemWObject
} from './Components'

const WithHooks = () => {
  console.log('render wh')
  const [resource, setResource] = useState({
    name: 'hello',
    bu: { id: '1' },
    jira: { id: '2' },
    capability: 'moi'
  })
  const [inputs, setInputs] = useState({ one: '1', two: '2' })
  const [a, setA] = useState('1')
  const [b, setB] = useState('2')

  const setValue = useCallback((id: string, value: string) => {
    if (id === 'a') {
      setA(value)
    } else if (id === 'b') {
      setB(value)
    } else if (id === 'one' || id === 'two') {
      setInputs(i => ({ ...i, [id]: value }))
    } else {
      setResource(r => ({ ...r, [id]: { id: value } }))
    }
  }, [])
  return (
    <div>
      <h1>Testing w Hooks</h1>
      <ItemWObject
        title="No Memo Object:"
        id="bu"
        value={resource.bu}
        onClick={setValue}
      />
      <MemoItemWObject
        title="With Memo Object:"
        id="jira"
        value={resource.jira}
        onClick={setValue}
      />
      <hr />
      <Item title="No Memo:" id="a" value={a} onClick={setValue} />
      <MemoItem title="With Memo:" id="b" value={b} onClick={setValue} />
      <hr />
      <Item
        title="No Memo Inputs:"
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
      <ItemWState title="No Memo Local state" />
      <MemoItemWState title="Local state with Memo" />
    </div>
  )
}

export default WithHooks
