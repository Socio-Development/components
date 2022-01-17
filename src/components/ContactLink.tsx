import React from 'react'
import { MailIcon, PhoneIcon } from '../assets/icons/index'
import '../styles/css/contactLink.css'

export interface ContactLinkProps {
  /**
   * The link contents
   */
  label: number | string
  /**
   * How to space digits in the phone number
   */
  pattern?: number[]
}

export function ContactLink({
  label,
  pattern = [2, 2, 2, 2],
  ...props
}: ContactLinkProps) {
  
  let prefix: string
  if (typeof label === 'string') {
    prefix = 'mailto:'
  } else {
    prefix = 'tel:+47'
  }

  function separateDigits() {
    const phone: string = String(label)
    let res: string[] = []
    let index: number = 0

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < pattern[x]; y++) {
        if (index < 8) {
          res.push(phone[index])
          index++
        } else {
          break
        }
      }
      res.push('\n')
    }

    return res.join('')
  }

  return (
    <a
      className="ContactLink"
      href={ prefix + label }
      {...props}
    >
      { typeof label === 'number' ? (
        <>
        <PhoneIcon className="ContactLink--icon" />
        { separateDigits() }
        </>
      ) : (
        <>
        <MailIcon className="ContactLink--icon" />
        { label }
        </>
      )}
    </a>
  )
}
