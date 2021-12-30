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
}

export default function Alert({
  label,
  mode = 'default'
}: AlertProps) {
  return (
    <div className={ `Alert Alert--${mode}` }>
      { label }
    </div>
  )
}
