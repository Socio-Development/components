import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from '../components/Modal'

export default {
  title: 'Featured/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

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
