import React from 'react'
import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Click me',
  mode: 'default',
  shape: 'soft',
  size: 'medium',
  outline: false,
  disabled: false
}

export const Modes: Story<ButtonProps> = args => (
  <div
    style={{
      alignItems: 'start',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}
  >
    <Button {...args} mode="default" />
    <Button {...args} mode="primary" />
    <Button {...args} mode="success" />
    <Button {...args} mode="danger" />
    <Button {...args} mode="dark" />
  </div>
)
Modes.args = {
  ...Default.args
}

export const Shapes: Story<ButtonProps> = args => (
  <div
    style={{
      alignItems: 'start',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}
  >
    <Button {...args} shape="pill" />
    <Button {...args} shape="rounded" />
    <Button {...args} shape="soft" />
    <Button {...args} shape="square" />
  </div>
)
Shapes.args = {
  ...Default.args
}

export const Outline = Modes.bind({})
Outline.args = {
  ...Default.args,
  outline: true
}

export const Disabled = Modes.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true
}
