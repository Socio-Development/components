import React from 'react'
// CSS
import './Alert.css'

export interface AlertProps {
  /**
   * Alert contents
   */
  label: string
  /**
   * Alert display mode
   */
  mode?: 'danger' | 'dark' | 'default' | 'primary' | 'success'
  /**
   * Alert corner shape
   * (shape="pill" will only display text on a single line)
   */
  shape?: 'pill' | 'rounded' | 'soft' | 'square'
}

export default function Alert({
  label,
  mode = 'default',
  shape = 'soft',
  ...props
}: AlertProps) {
  return (
    <div
      className={ `Alert Alert--${mode} Alert--${shape}` }
      {...props}
    >
      { label }
    </div>
  )
}
