import { useState, useRef, useLayoutEffect } from 'react'

const useFocus = (initialFocus = false) => {
  const ref: any = useRef()
  useLayoutEffect(() => {
    if (initialFocus && ref.current) {
      ref.current.focus()
    }
  }, [initialFocus])

  const setFocus = () => {
    if (ref.current) {
      ref.current.focus()
    }
  }

  return [ref, setFocus]
}

const useInput = (onAdd?: (title: string) => void, initialFocus = false) => {
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
    if (onAdd) {
      onAdd(title)
    }
  }

  return [value, ref, { onSubmit, onChange, setFocus }]
}

export default useInput
