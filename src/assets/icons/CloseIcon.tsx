import React from 'react'
import { Icon } from './Icon'

/**
 * This component generates the closing icon used by the
 * `ButtonClose` component
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.1.0
 * @since 0.1.0
 */
export function CloseIcon({...props}) {
  return (
    <Icon
      d="M12.288-246.3,7-251.586,1.712-246.3A1,1,0,0,1,1-246a1,1,0,0,1-1-1,1,1,0,0,1,.293-.707L5.586-253,.3-258.289A1,1,0,0,1,0-259a1,1,0,0,1,1-1,1,1,0,0,1,.715.3L7-254.414l5.285-5.285A1,1,0,0,1,13-260a1,1,0,0,1,1,1,1,1,0,0,1-.3.711L8.414-253l5.293,5.293A1,1,0,0,1,14-247a1,1,0,0,1-1,1A1,1,0,0,1,12.288-246.3Z"
      transform="translate(5 265)"
      {...props}
    />
  )
}
