import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Alert, AlertProps } from '../components/Alert'

export default {
  title: 'Featured/Alert',
  component: Alert,
} as Meta

const Template: Story<AlertProps> = args => <Alert {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'This is an alert',
  mode: 'default',
  shape: 'soft',
  dismissable: false,
  exitAnimation: 'fade'
}

export const Modes: Story<AlertProps> = args => (<>
  <Alert {...args} mode="default" label={ `Default: ${args.label}` } />
  <Alert {...args} mode="primary" label={ `Primary: ${args.label}` } />
  <Alert {...args} mode="success" label={ `Success: ${args.label}` } />
  <Alert {...args} mode="danger" label={ `Danger: ${args.label}` } />
  <Alert {...args} mode="info" label={ `Info: ${args.label}` } />
  <Alert {...args} mode="dark" label={ `Dark: ${args.label}` } />
</>)
Modes.args = {
  ...Default.args
}

export const Shapes: Story<AlertProps> = args => (<>
  <Alert {...args} shape="pill" label={ `Pill: ${args.label}` } />
  <Alert {...args} shape="rounded" label={ `Rounded: ${args.label}` } />
  <Alert {...args} shape="soft" label={ `Soft: ${args.label}` } />
  <Alert {...args} shape="square" label={ `Square: ${args.label}` } />
</>)
Shapes.args = {
  ...Default.args
}

export const Dismissable = Template.bind({})
Dismissable.args = {
  ...Default.args,
  dismissable: true
}
