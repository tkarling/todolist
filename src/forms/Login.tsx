import React from 'react'
import Login from '../components/Login'
import useForm from '../hooks/useForm'

const LoginContainer = ({}) => {
  const { inputs, onSubmit, onChange } = useForm()
  return <Login onSubmit={onSubmit} onChange={onChange} />
}

export default LoginContainer
