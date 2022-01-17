import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContactLink } from '../components/ContactLink'

export default {
  title: 'Featured/ContactLink',
  component: ContactLink,
} as ComponentMeta<typeof ContactLink>

const Template: ComponentStory<typeof ContactLink> = args => <ContactLink {...args} />

export const Email = Template.bind({})
Email.args = {
  label: 'post@email.com'
}

export const Phone = Template.bind({})
Phone.args = {
  label: 12345678,
  pattern: [2, 2, 2, 2]
}
