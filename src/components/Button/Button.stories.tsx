import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import { linkTo } from '@storybook/addon-links'

import Button from '../Button'

storiesOf('Button', module)
  .add('with knobs', () => (
    <Button
      type={select('type', ['primary', 'danger'], 'primary')}
      disabled={boolean('Disabled', false)}
      onClick={action('Clicked')}
    >
      Hello
    </Button>
  ))
  .add('colors', () => (
    <div>
      <Button type="primary" onClick={action('Clicked primary')}>
        primary
      </Button>
      <Button type="danger" onClick={action('Clicked danger')}>
        danger
      </Button>
    </div>
  ))
