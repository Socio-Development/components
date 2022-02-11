import React from 'react'
import { MailIcon, PhoneIcon } from '../assets/Icons'
import '../assets/css/contactLink.css'

export interface ContactLinkProps {
  /**
   * The link contents
   */
  label: number | string
  /**
   * Phone number digit separation pattern
   * @example ```javascript
   * <ContactLink label="12345678" pattern={[3, 2, 3]} />
   * // Displays the number as "123 45 678"
   * ```
   */
  pattern?: number[]
  /**
   * The size in 'rem'
   */
  size?: number
}

/**
 * Displays either a `mailto:`, or `tel:` link with corresponding icons
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.1.1
 * @since 0.1.0
 * @global
 */
export function ContactLink({
  label,
  pattern = [2, 2, 2, 2],
  size = 1,
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
      style={{
        fontSize: `${size}rem`
      }}
      {...props}
    >
      { typeof label === 'number' ? (
        <>
        <PhoneIcon
          className="ContactLink--icon"
          size={ size }
        />
        { separateDigits() }
        </>
      ) : (
        <>
        <MailIcon
          className="ContactLink--icon"
          size={ size }
        />
        { label }
        </>
      )}
    </a>
  )
}
