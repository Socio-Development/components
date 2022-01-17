import React from 'react'
import { TMode } from '../index'
import '../styles/css/spinner.css'

export interface SpinnerProps {
  /**
   * The animation (rotation) speed
   */
  duration?: number
  /**
   * The display mode (color theme)
   */
  mode?: TMode
}

/**
 * UI component to visualize loading content
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.1.0
 * @since 0.0.1
 * @global
 */
export function Spinner({
  duration = 1,
  mode = 'default',
  ...props
}: SpinnerProps) {
  return (
    <div
      className={[
        'Spinner',
        `Spinner--${mode}`
      ].join(' ')}
      role="status"
      style={{
        animationDuration: `${duration}s`,
        WebkitAnimationDuration: `${duration}s`
      }}
      {...props}
    >
      <span className="Spinner--hidden">Loading...</span>
    </div>
  )
}
