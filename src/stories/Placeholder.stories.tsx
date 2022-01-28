import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Placeholder } from '../components/Placeholder'

export default {
  title: 'Featured/Placeholder',
  component: Placeholder,
} as ComponentMeta<typeof Placeholder>

const Template: ComponentStory<typeof Placeholder> = args => <Placeholder {...args} />

export const Default = Template.bind({})
Default.args = {
  width: '10%',
  height: '1rem',
  shape: 'square',
  animate: false,
  cursorEffect: 'default',
}

export const Animated = Template.bind({})
Animated.args = {
  ...Default.args,
  animate: true
}
