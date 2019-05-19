import React from 'react'
import styles from './Button.module.css'

const Button = ({
  disabled = false,
  type = 'primary',
  onClick = () => {
    /** noop */
  },
  children
}: {
  disabled?: boolean
  type: 'primary' | 'danger'
  onClick?: (event: any) => void
  children: any
}) => {
  const myClass = disabled ? styles.ButtonDisabled : styles.ButtonEnabled
  const myColorClass =
    styles[`Button${type[0].toUpperCase() + type.substring(1)}`]
  return (
    <button
      className={`${myColorClass}  ${myClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
