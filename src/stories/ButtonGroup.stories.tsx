import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ButtonGroup } from '../components/ButtonGroup'
import { Button } from '../components/Button'

export default {
  title: 'Featured/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = args => <ButtonGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  shape: 'soft',
  children: (
    <>
    <Button label="Click me" mode="primary" />
    <Button label="Click me" mode="primary" />
    <Button label="Click me" mode="primary" />
    </>
  )
}
