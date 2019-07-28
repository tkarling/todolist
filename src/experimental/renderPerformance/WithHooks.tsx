import React, { useState, useCallback } from 'react'

interface ItemsParams {
  title: string
  id: string
  value: string
  onClick: Function
}
export const Item = ({ title, id, value, onClick }: ItemsParams) => {
  console.log(title, 'id: ', id, 'value: ', value)
  return (
    <div onClick={() => onClick(id, value + id)}>
      {title} {value}
    </div>
  )
}

export const MemoItem = React.memo(
  ({ title, id, value, onClick }: ItemsParams) => {
    console.log(title, 'id: ', id, 'value: ', value)
    return (
      <div onClick={() => onClick(id, value + id)}>
        {title} {value}
      </div>
    )
  }
)

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
    </div>
  )
}

export default WithHooks
