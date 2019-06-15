import React, { useState, useRef, useEffect } from 'react'

const useFocus = (initialFocus = false) => {
  const ref: any = useRef()
  useEffect(() => {
    if (initialFocus) {
      ref.current.focus()
    }
  }, [])

  const setFocus = () => {
    ref.current.focus()
  }

  return [ref, setFocus]
}

const useInput = (onAdd: (title: string) => void, initialFocus = false) => {
  const [ref, setFocus] = useFocus(initialFocus)

  const [value, setValue] = useState('')
  const onChange = (title: string) => {
    setValue(title)
  }

  const onSubmit = (title: string) => {
    setValue('')
    if (initialFocus) {
      setFocus()
    }
    onAdd(title)
  }

  return [value, ref, { onSubmit, onChange, setFocus }]
}

export default useInput
