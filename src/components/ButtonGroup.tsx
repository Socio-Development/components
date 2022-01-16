import React from 'react'
import { TShape } from '../index'
import '../styles/css/buttonGroup.css'

export interface ButtonGroupProps {
  /**
   * The button elements
   */
  children: JSX.Element[]
  /**
   * ButtonGroup corner shape
   */
  shape?: TShape
}

/**
 * A container for grouping multiple buttons.
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
