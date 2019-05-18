import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { linkTo } from '@storybook/addon-links'

import Button from '../Button'

storiesOf('Button', module).add('default', () => (
  <Button
    text="Hello"
    disabled={boolean('Disabled', false)}
    onClick={action('Clicked')}
  />
))
