import React, { useState } from 'react'
import { Style } from '../../styling'
import { Mode, Shape } from '../../typings/types'
// CSS
import './Button.css'

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
   * Alert display mode
   */
  mode?: Mode
  /**
   * Display the button as outlined?
   */
  outline?: boolean
  /**
   * Alert corner shape
   */
  shape?: Shape
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
 */
export default function Button({
  disabled,
  label,
  mode = 'default',
  outline,
  shape = 'soft',
  size = 'medium',
  ...props
}: ButtonProps) {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }
  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const style = Style.color[mode]

  const defaultStyle = {
    backgroundColor: !isHovering ? style.background : style.backgroundHover,
    borderColor: !isHovering ? style.background : style.backgroundHover,
    borderRadius: Style.shape[shape],
    color: style.foreground
  }
  const outlineStyle = {
    ...defaultStyle,
    backgroundColor: !isHovering ? 'transparent' : style.background,
    borderColor: style.background,
    color: !isHovering ? style.background : style.foreground
  }

  return (
    <button
      className={[
        'Button',
        `Button--${shape}`,
        `Button--${size}`,
        disabled && 'disabled',
      ].join(' ')}
      style={ outline ? outlineStyle : defaultStyle }
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
      {...props}
    >
      { label }
    </button>
  )
}
