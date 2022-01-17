import React, { useState } from 'react'
import { TMode, TShape } from '../index'
import { ButtonClose } from './ButtonClose'
import '../styles/css/alert.css'

export interface AlertProps {
  /**
   * Is the alert dismissable?
   */
  dismissable?: boolean
  /**
   * What exit animation to play?
   */
  exitAnimation?: 'fade' | 'left' | 'right'
  /**
   * Alert contents
   */
  label: string
  /**
   * Alert display mode
   */
  mode?: TMode
  /**
   * Alert corner shape
   * (shape="pill" will only display text on a single line)
   */
  shape?: TShape
}

/**
 * Primary UI component for user notification
 */
export function Alert({
  dismissable,
  exitAnimation = 'fade',
  label,
  mode = 'default',
  shape = 'soft',
  ...props
}: AlertProps) {
  const [isActive, setIsActive] = useState(true)
  const [isHidden, setIsHidden] = useState(false)

  const closeAlert = () => {
    setIsHidden(true)
    setTimeout(() => setIsActive(false), 800)
  }
  const closeButton = (
    <button
      className="Alert--close"
      type="button"
      aria-label="Close"
      title="Close"
      onClick={ closeAlert }
    />
  )

  if (isActive) return (
    <div
      className={[
        'Alert',
        `Alert--${mode}`,
        `Alert--${shape}`,
        dismissable && 'Alert--dismissable',
        isHidden && `Alert--exit Alert--exit-${exitAnimation}`
      ].join(' ')}
      role="alert"
      {...props}
    >
      <span className="Alert--text">{ label }</span>
      { dismissable && <ButtonClose onClick={ closeAlert } /> }
    </div>
  )
  return <div />
}
