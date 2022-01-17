import React from 'react'
import { Icon } from './Icon'

/**
 * This component generates the mail icon used by the
 * `ContactLink` component
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.1.0
 * @since 0.1.0
 */
export function MailIcon({...props}) {
  return (
    <Icon
      d="M2-244a2,2,0,0,1-2-2v-12a2,2,0,0,1,2-2H18a2,2,0,0,1,2,2v12a2,2,0,0,1-2,2Zm0-2H18v-10.955l-7.377,5.737A1,1,0,0,1,10-251a1,1,0,0,1-.623-.218L2-256.956Zm8-7.267L16.086-258H3.914Z"
      transform="translate(2 264)"
      {...props}
    />
  )
}
