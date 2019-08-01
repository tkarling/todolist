import React, { useState } from 'react'

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

export const ItemWState = ({ title }: { title: string }) => {
  const [value, setValue] = useState('1')
  console.log(title, 'value: ', value)
  const onClick = () => {
    setValue(value => value + '1')
  }
  return (
    <div onClick={onClick}>
      {title} {value}
    </div>
  )
}

export const MemoItemWState = React.memo(({ title }: { title: string }) => {
  const [value, setValue] = useState('1')
  console.log(title, 'value: ', value)
  const onClick = () => {
    setValue(value => value + '1')
  }
  return (
    <div onClick={onClick}>
      {title} {value}
    </div>
  )
})

interface ObjectItemsParams {
  title: string
  id: string
  value: { id: string }
  onClick: Function
}

export const ItemWObject = ({
  title,
  id,
  value,
  onClick
}: ObjectItemsParams) => {
  console.log(title, 'id: ', id, 'value: ', value)
  return (
    <div onClick={() => onClick(id, value.id + id)}>
      {title} {value.id}
    </div>
  )
}

export const MemoItemWObject = React.memo(
  ({ title, id, value, onClick }: ObjectItemsParams) => {
    console.log(title, 'id: ', id, 'value: ', value)
    return (
      <div onClick={() => onClick(id, value.id + id)}>
        {title} {value.id}
      </div>
    )
  }
)
