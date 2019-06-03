import { useState, useEffect } from 'react'

const useLocalStorage = (storageKey: string, defaultValue: any = null) => {
  const content = window.localStorage.getItem(storageKey)
  const initialValue = () => (content ? JSON.parse(content) : defaultValue)
  const [value, setValue] = useState(initialValue)
  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(value))
  }, [value])
  return [value, setValue]
}

export default useLocalStorage
