import React from 'react'
import { Meta, Story } from '@storybook/react'
import Spinner, { SpinnerProps } from '../components/Spinner'

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta

const Template: Story<SpinnerProps> = args => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {
  mode: 'default',
  duration: 1
}

export const Modes: Story<SpinnerProps> = args => (
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
