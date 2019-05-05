import React from 'react'

const AddTodo = ({
  onAdd,
  onChange,
  title,
  inputRef
}: {
  onAdd: Function
  onChange: Function
  title: string
  inputRef: any
}) => {
  const onSubmit = (event: any) => {
    event.preventDefault()
    onAdd(title)
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        ref={inputRef}
        placeholder="add todo"
        value={title}
        onChange={(event: any) =>
          event.keyCode !== 13 ? onChange(event.target.value) : onSubmit(event)
        }
      />
      <input type="submit" value="submit" />
    </form>
  )
}

export default AddTodo
