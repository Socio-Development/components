import React from 'react'
import { TShape } from '../index'

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
export default function ButtonGroup({
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
