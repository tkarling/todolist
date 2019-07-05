import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import { linkTo } from '@storybook/addon-links'

import useForm from '../../hooks/useForm'

import Login from '../Login'

const LoginContainer = ({}) => {
  const { inputs, onChange, onSubmit } = useForm()
  return <Login onSubmit={onSubmit} onChange={onChange} />
}

storiesOf('Login', module).add('default', () => <LoginContainer />)
