import React, { useState } from 'react'
// CSS
import './Alert.css'

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
  mode?: 'danger' | 'dark' | 'default' | 'primary' | 'success'
  /**
   * Alert corner shape
   * (shape="pill" will only display text on a single line)
   */
  shape?: 'pill' | 'rounded' | 'soft' | 'square'
}

export default function Alert({
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
      {...props}
    >
      <span className="Alert--text">{ label }</span>
      { dismissable && closeButton }
    </div>
  )
  return <div />
}
