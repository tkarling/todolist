import { useState, useEffect } from 'react'

const useLocalStorage = (storageKey: string, defaultValue: any = null) => {
  const initialValue = () =>
    JSON.parse(window.localStorage.getItem(storageKey) || '') || defaultValue
  const [value, setValue] = useState(initialValue)
  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(value))
  }, [value])
  return [value, setValue]
}

export default useLocalStorage
