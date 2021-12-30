import { Meta, Story } from '@storybook/react'
import React from 'react'
import Alert, { AlertProps } from './Alert'

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta

const Template: Story<AlertProps> = args => <Alert {...args} />
const TemplateAll: Story<AlertProps> = args => (<>
  <Alert {...args} mode="default" label="this is the default alert" />
  <Alert {...args} mode="primary" label="this is the primary alert" />
  <Alert {...args} mode="success" label="this is the success alert" />
  <Alert {...args} mode="danger" label="this is the danger alert" />
  <Alert {...args} mode="dark" label="this is the dark alert" />
  </>)

export const Default = Template.bind({})
Default.args = {
  label: 'This is an alert',
  mode: 'default'
}

export const Modes = TemplateAll.bind({})
