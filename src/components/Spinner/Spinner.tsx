import React from 'react'
import { Mode } from '../../typings/types'

export interface SpinnerProps {
  /**
   * Spinner animation speed
   */
  duration?: number
  /**
   * Spinner display mode
   */
  mode?: Mode
}

/**
 * UI component to visualize loading content
 */
export default function Spinner({
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
