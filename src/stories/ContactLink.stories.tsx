import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ContactLink, ContactLinkProps } from '../components/ContactLink'

export default {
  title: 'Featured/ContactLink',
  component: ContactLink,
} as Meta

const Template: Story<ContactLinkProps> = args => <ContactLink {...args} />

export const Email = Template.bind({})
Email.args = {
  label: 'post@email.com'
}

export const Phone = Template.bind({})
Phone.args = {
  label: 12345678
}
