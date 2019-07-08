import React from 'react'

import styles from './Login.module.css'
import { FIELDS, Field } from './data'

const FormField = ({
  field,
  onChange
}: {
  field: Field
  onChange: Function
}) => (
  <div className={styles.FormField}>
    <label>{field.label || field.id}:</label>
    <input
      className={styles.FormFieldInput}
      name={field.name || field.id}
      type={field.type}
      onChange={onChange as any}
      required={field.required}
      placeholder={field.placeholder || field.label || field.id}
    />
  </div>
)

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
      <FormField field={FIELDS.username} onChange={onChange} />
      <FormField field={FIELDS.password} onChange={onChange} />
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
      <FormField field={FIELDS.username} onChange={onChange} />
      <FormField field={FIELDS.password} onChange={onChange} />
      <FormField field={FIELDS.repeatPassword} onChange={onChange} />
    </Form>
  )
}
