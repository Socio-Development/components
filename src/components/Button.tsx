import React from 'react'
import { TMode, TShape } from '../index'

export interface ButtonProps {
  /**
   * Is the button disabled?
   */
  disabled?: boolean
  /**
   * Button contents
   */
  label: string
  /**
   * Button display mode
   */
  mode?: TMode
  /**
   * Display the button as outlined?
   */
  outline?: boolean
  /**
   * Button corner shape
   */
  shape?: TShape
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
  disabled,
  label,
  mode = 'default',
  outline,
  shape = 'soft',
  size = 'medium',
  ...props
}: ButtonProps) {

  return (
    <button
      className={[
        'Button',
        outline ? `Button--${mode}-outline` : `Button--${mode}`,
        `Button--${shape}`,
        `Button--${size}`,
        disabled && 'disabled',
      ].join(' ')}
      {...props}
    >
      { label }
    </button>
  )
}
