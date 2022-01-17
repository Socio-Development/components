import React from 'react'
import { MailIcon, PhoneIcon } from '../assets/icons/index'
import '../styles/css/contactLink.css'

export interface ContactLinkProps {
  label: number | string
}

export function ContactLink({
  label,
  ...props
}: ContactLinkProps) {
  let prefix: string

  if (typeof label === 'string') {
    prefix = 'mailto:'
  } else {
    prefix = 'tel:+47'
  }
  return (
    <a
      className="ContactLink"
      href={ prefix + label }
      {...props}
    >
      { typeof label === 'string' ? (
        <MailIcon className="ContactLink--icon" />
      ) : (
        <PhoneIcon className="ContactLink--icon" />
      ) }
      { label }
    </a>
  )
}
