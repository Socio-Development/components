import React from 'react'
import { TShape } from '../index'
import '../assets/css/buttonGroup.css'

export interface ButtonGroupProps {
  /**
   * The `Button` components that goes inside the group
   */
  children: JSX.Element[]
  /**
   * The corner shape (border-radius)
   */
  shape?: TShape
}

/**
 * A container for grouping multiple buttons
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.1.0
 * @since 0.0.1
 * @global
 */
export function ButtonGroup({
  children,
  shape = 'soft',
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={[
        'ButtonGroup',
        `ButtonGroup--${shape}`
      ].join(' ')}
      role="group"
      {...props}
    >
      { children }
    </div>
  )
}
