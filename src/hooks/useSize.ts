import { useState, useRef, useEffect } from 'react'
import elementResizeEvent from 'element-resize-event'

const NO_SIZE_ELEMENT = { clientHeight: 0, clientWidth: 0 }

const useSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const ref = useRef(null)

  useEffect(() => {
    const updateSize = () => {
      const element = ref.current || NO_SIZE_ELEMENT
      setSize({ height: element.clientHeight, width: element.clientWidth })
    }

    const element = ref.current
    updateSize()
    if (element) {
      elementResizeEvent(element as any, updateSize)
    }
    return () => elementResizeEvent.unbind(element as any, updateSize)
  }, [])

  return [size, ref]
}

export default useSize
