import React from 'react'

import styles from './Login.module.css'
import { link } from 'fs'

const FormField = ({
  label,
  onChange
}: {
  label: string
  onChange: Function
}) => {
  return (
    <div className={styles.FormField}>
      <label>{label}:</label>
      <input
        className={styles.FormFieldInput}
        name={label}
        onChange={onChange as any}
      />
    </div>
  )
}

const Form = ({
  onSubmit,
  title,
  link,
  children
}: {
  onSubmit: any
  title: string
  link?: { label: string; onClick: any }
  children: any
}) => {
  const onSubmitP = (event: any) => {
    event.preventDefault()
    onSubmit(event)
  }
  return (
    <form className={styles.Form} onSubmit={onSubmitP}>
      <div className={styles.FormTitleRow}>
        <div className={styles.FormTitle}>{title}</div>
        {link && (
          <a className={styles.FormLink} onClick={link.onClick}>
            {link.label}
          </a>
        )}
      </div>
      {children}
      <button className={styles.FormSubmit}>Submit</button>
    </form>
  )
}

export const Login = ({
  onChange,
  onSubmit,
  onGotoRegister
}: {
  onChange?: any
  onSubmit?: any
  onGotoRegister?: any
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      title="Sign In"
      link={{ label: 'Need an account? Sign Up', onClick: onGotoRegister }}
    >
      <FormField label="Username" onChange={onChange} />
      <FormField label="Password" onChange={onChange} />
    </Form>
  )
}

export const Register = ({
  onChange,
  onSubmit,
  onGotoLogin
}: {
  onChange?: any
  onSubmit?: any
  onGotoLogin?: any
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      title="Sign Up"
      link={{ label: 'Return to Sign In', onClick: onGotoLogin }}
    >
      <FormField label="Username" onChange={onChange} />
      <FormField label="Password" onChange={onChange} />
      <FormField label="Repeat Password" onChange={onChange} />
    </Form>
  )
}
