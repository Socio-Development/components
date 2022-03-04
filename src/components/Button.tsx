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
 * @version 0.2.0
 * @since 0.0.1
 * @published
 */
export function Button({
  disabled = false,
  label,
  mode = 'light',
  outline,
  shape = 'soft',
  size = 'medium',
  ...props
}: ButtonProps) {

  return (
    <button
      className={[
        'Button',
        `Button--mode-${mode}`,
        `Button--shape-${shape}`,
        `Button--size-${size}`,
        outline && 'Button--outline',
      ].join(' ')}
      disabled={disabled}
      {...props}
    >
      { label }
    </button>
  )
}
