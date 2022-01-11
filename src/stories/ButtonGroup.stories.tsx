import React from 'react'
import { Meta, Story } from '@storybook/react'
import ButtonGroup, { ButtonGroupProps } from '../components/ButtonGroup'
import Button from '../components/button/Button'

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} as Meta

const Template: Story<ButtonGroupProps> = args => <ButtonGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  shape: 'soft',
  children: (
    <>
    <Button label="Click me" />
    <Button label="Click me" />
    <Button label="Click me" />
    </>
  )
}
