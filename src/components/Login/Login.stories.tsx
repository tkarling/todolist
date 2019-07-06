import React, { useState, useEffect } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import { linkTo } from '@storybook/addon-links'

import useForm from '../../hooks/useForm'
import usePage from '../../hooks/usePage'

import { Login, Register } from '../Login'

const LoginContainer = ({}) => {
  const { inputs, onChange, onSubmit } = useForm({
    callback: action('callback called')
  })
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

storiesOf('Login', module)
  .add('LoginContainer', () => <LoginContainer />)
  .add('Login', () => (
    <Login
      onSubmit={action('Submit clicked')}
      onChange={action('input changed')}
      onGotoRegister={action('link clicked')}
    />
  ))
  .add('Register', () => (
    <Register
      onSubmit={action('Submit clicked')}
      onChange={action('input changed')}
      onGotoLogin={action('link clicked')}
    />
  ))
