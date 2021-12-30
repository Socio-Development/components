import { Meta, Story } from '@storybook/react'
import React from 'react'
import Alert, { AlertProps } from './Alert'

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta

const Template: Story<AlertProps> = args => <Alert {...args} />

export const Danger = Template.bind({})
Danger.args = {
  label: 'This is an alert!'
}
