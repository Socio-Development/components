import { Meta, Story } from '@storybook/react'
import React from 'react'
import Alert, { AlertProps } from './Alert'

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta

const Template: Story<AlertProps> = args => <Alert {...args} />
const TemplateAll: Story<AlertProps> = args => (<>
  <Alert {...args} mode="default" label="This is the default alert" />
  <Alert {...args} mode="primary" label="This is the primary alert" />
  <Alert {...args} mode="success" label="This is the success alert" />
  <Alert {...args} mode="danger" label="This is the danger alert" />
  <Alert {...args} mode="dark" label="This is the dark alert" />
  </>)

export const Default = Template.bind({})
Default.args = {
  label: 'This is an alert',
  mode: 'default',
  shape: 'soft'
}

export const Modes = TemplateAll.bind({})
