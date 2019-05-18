import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import '../src/App.css'

addDecorator(withKnobs)
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/)

function loadStories() {
  require('./welcomeStory')
  req.keys().forEach(req)
}

configure(loadStories, module)
