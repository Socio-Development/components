import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Spinner } from '../components/Spinner'

export default {
  title: 'Featured/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {
  mode: 'default',
  duration: 1
}

export const Modes: ComponentStory<typeof Spinner> = args => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem'
    }}
  >
    <Spinner {...args} mode="default" />
    <Spinner {...args} mode="primary" />
    <Spinner {...args} mode="success" />
    <Spinner {...args} mode="danger" />
    <Spinner {...args} mode="info" />
    <Spinner {...args} mode="dark" />
  </div>
)
Modes.args = {
  ...Default.args
}
