import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../components/Button'

export default {
  title: 'Featured/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Click me',
  mode: 'light',
  shape: 'soft',
  size: 'medium',
  outline: false,
  disabled: false
}

export const Modes: ComponentStory<typeof Button> = args => (
  <div
    style={{
      alignItems: 'start',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}
  >
    <Button {...args} mode="light" />
    <Button {...args} mode="primary" />
    <Button {...args} mode="success" />
    <Button {...args} mode="danger" />
    <Button {...args} mode="info" />
    <Button {...args} mode="dark" />
  </div>
)
Modes.args = {
  ...Default.args
}

export const Shapes: ComponentStory<typeof Button> = args => (
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
