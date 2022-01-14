import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Modal, ModalProps } from '../components/Modal'

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta

const Template: Story<ModalProps> = args => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Modal Title',
  mode: 'default',
  shape: 'soft',
  children: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae adipisci, quibusdam quas atque earum quos eaque molestiae facilis ipsam amet.</p>
}

export const Long = Template.bind({})
Long.args = {
  title: 'Modal Title',
  mode: 'default',
  shape: 'soft',
  children: [
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt aspernatur itaque maiores doloremque eveniet earum! Eveniet aspernatur similique, delectus maxime provident natus distinctio nam ratione atque dolore, ullam accusantium.</p>,
    <p>Quae distinctio consectetur eligendi, ratione voluptatibus odit enim sequi repudiandae accusantium, debitis repellendus, explicabo quidem est numquam quasi praesentium quia! Voluptate laudantium ab ullam maxime doloremque fugit quaerat eveniet ipsum minima magni!</p>
  ]
}