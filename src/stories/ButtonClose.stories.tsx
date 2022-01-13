import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ButtonClose, ButtonCloseProps } from '../components/ButtonClose'

export default {
  title: 'Components/ButtonClose',
  component: ButtonClose,
} as Meta

const Template: Story<ButtonCloseProps> = args => <ButtonClose {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 1
}
