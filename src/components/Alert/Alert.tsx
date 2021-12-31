import React, { useState } from 'react'
// CSS
import './Alert.css'

export interface AlertProps {
  /**
   * Is the alert dismissable?
   */
  dismissable?: boolean
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
  label,
  mode = 'default',
  shape = 'soft',
  ...props
}: AlertProps) {
  const [isDisplayed, setIsDisplayed] = useState('flex')

  const handleOnClick = () => {
    setIsDisplayed('none')
  }

  const closeButton = (
    <button
      className="Alert--close"
      type="button"
      aria-label="Close"
      title="Close"
      onClick={ handleOnClick }
    />
  )

  return (
    <div
      className={[
        'Alert',
        `Alert--${mode}`,
        `Alert--${shape}`,
        dismissable && 'Alert--dismissable'
      ].join(' ')}
      style={{ display: isDisplayed }}
      {...props}
    >
      <span className="Alert--text">{ label }</span>
      { dismissable && closeButton }
    </div>
  )
}
