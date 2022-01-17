import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ButtonClose } from '../components/ButtonClose'

export default {
  title: 'Components/ButtonClose',
  component: ButtonClose,
} as ComponentMeta<typeof ButtonClose>

const Template: ComponentStory<typeof ButtonClose> = args => <ButtonClose {...args} />

export const Default = Template.bind({})
Default.args = {}
