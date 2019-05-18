import React from 'react'
import styles from './Button.module.css'

const Button = ({
  text,
  disabled = false,
  onClick = () => {
    /** noop */
  },
  backgroundColor = 'blue'
}: {
  text: string
  disabled?: boolean
  onClick?: (event: any) => void
  backgroundColor?: string
}) => {
  const myClass = disabled ? styles.ButtonDisabled : styles.ButtonEnabled
  const myStyle = disabled ? {} : { backgroundColor }
  return (
    <button
      className={myClass}
      style={myStyle}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
