import React from 'react'
import { Login, Register } from '../components/Login'
import useForm from '../hooks/useForm'
import usePage from '../hooks/usePage'

const LoginContainer = ({}) => {
  const { inputs, onChange, onSubmit } = useForm()
  const pages = () => [
    <Login onSubmit={onSubmit} onChange={onChange} onGotoRegister={nextPage} />,
    <Register onSubmit={onSubmit} onChange={onChange} onGotoLogin={nextPage} />
  ]
  const { currentPage, nextPage } = usePage({
    pages,
    firstPage: 0
  })

  return currentPage()
}

export default LoginContainer
