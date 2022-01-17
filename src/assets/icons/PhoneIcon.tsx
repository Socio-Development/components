import React from 'react'
import { Icon } from './Icon'

/**
 * This component generates the phone icon used by the
 * `ContactLink` component
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.1.0
 * @since 0.1.0
 */
export function PhoneIcon({...props}) {
  return (
    <Icon
      d="M10-240H2a1.987,1.987,0,0,1-.779-.157,1.993,1.993,0,0,1-.636-.429,1.993,1.993,0,0,1-.429-.636A1.989,1.989,0,0,1,0-242v-16a1.989,1.989,0,0,1,.157-.778,1.994,1.994,0,0,1,.429-.636,2,2,0,0,1,.636-.429A1.989,1.989,0,0,1,2-260h8a1.989,1.989,0,0,1,.779.157,1.994,1.994,0,0,1,.636.429,1.994,1.994,0,0,1,.429.636A1.989,1.989,0,0,1,12-258v16a1.989,1.989,0,0,1-.157.779,1.993,1.993,0,0,1-.429.636,1.993,1.993,0,0,1-.636.429A1.987,1.987,0,0,1,10-240Zm-4-3a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6-243ZM2-258v14h8v-14H2Z"
      transform="translate(6 262)"
      {...props}
    />
  )
}
