import React from 'react'
import { Mode, Shape } from '../../typings/types'
// CSS
import './Button.css'

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string
  /**
   * Alert display mode
   */
  mode?: Mode
  /**
   * Alert corner shape
   */
  shape?: Shape
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export default function Button({
  label,
  mode = 'default',
  shape = 'soft',
  size = 'medium',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'Button',
        `Button--${mode}`,
        `Button--${shape}`,
        `Button--${size}`,
      ].join(' ')}
      {...props}
    >
      { label }
    </button>
  )
}
