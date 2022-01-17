import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TestPage } from '../components/TestPage'
import { Modal } from '../components/Modal'
import { Default as ModalStory } from './Modal.stories'

export default {
  title: 'Test/Page',
  component: TestPage,
  subcomponents: {
    Modal
  },
} as ComponentMeta<typeof TestPage>

const Template: ComponentStory<typeof TestPage> = args => <TestPage {...args} />

const defaultContent: JSX.Element = (
  <>
  <h1>Hello World!</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis nihil eum, at consequatur animi vitae facilis. Cum, deleniti? Dignissimos accusantium cumque molestiae dolorem voluptates nesciunt cum porro voluptatem quos.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis nihil eum, at consequatur animi vitae facilis. Cum, deleniti? Dignissimos accusantium cumque molestiae dolorem voluptates nesciunt cum porro voluptatem quos.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis nihil eum, at consequatur animi vitae facilis. Cum, deleniti? Dignissimos accusantium cumque molestiae dolorem voluptates nesciunt cum porro voluptatem quos.</p>
  </>
)

export const Default = Template.bind({})
Default.args = {
  children: defaultContent
}

export const WithModal: ComponentStory<typeof Modal> = args => (
  <TestPage>
    <Modal {...args} />
    { defaultContent }
  </TestPage>
)
WithModal.args = {
  ...ModalStory.args
}
