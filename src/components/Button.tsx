import React from 'react'
import { TMode, TShape } from '../index'
import '../assets/css/button.css'

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
   * The display mode (color theme)
   */
  mode?: TMode
  /**
   * Display the button as outlined?
   */
  outline?: boolean
  /**
   * The corner shape (border-radius)
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
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.1.0
 * @since 0.0.1
 * @global
 */
export function Button({
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
