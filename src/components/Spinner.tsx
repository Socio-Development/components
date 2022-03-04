import React from 'react'
import { TMode } from '../index'
import '../assets/css/spinner.css'

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
 * @version 0.2.0
 * @since 0.0.1
 * @published
 */
export function Spinner({
  duration = 1,
  mode = 'dark',
  ...props
}: SpinnerProps) {
  return (
    <div
      className={[
        'Spinner',
        `Spinner--mode-${mode}`
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
