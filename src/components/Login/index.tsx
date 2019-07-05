import React from 'react'

const FormField = ({
  label,
  onChange
}: {
  label: string
  onChange: Function
}) => {
  return (
    <div>
      <label>{label}:</label>
      <input name={label} onChange={onChange as any} />
      <div />
    </div>
  )
}

const Login = ({ onChange, onSubmit }: { onChange: any; onSubmit: any }) => {
  return (
    <form onSubmit={onSubmit}>
      <FormField label="Username" onChange={onChange} />
      <FormField label="Password" onChange={onChange} />
      <button>Submit</button>
    </form>
  )
}

export default Login
