import React from 'react'
import { TShape } from '..'
import '../assets/css/placeholder.css'

export interface PlaceholderProps {
  /**
   * Add loading animation?
   */
  animate?: boolean
  /**
   * Add effects to cursor
   */
  cursorEffect?: 'default' | 'loading'
  /**
   * The height
   */
  height?: string
  /**
   * The corner shape (border-radius)
   */
  shape?: TShape
  /**
   * The width
   */
  width?: string
}

/**
 * UI component for displaying loading data
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.2.0
 * @since 0.2.0
 * @global
 */
export function Placeholder({
  animate = false,
  cursorEffect = 'default',
  height = '1rem',
  shape = 'square',
  width = '10%',
  ...props
}: PlaceholderProps): JSX.Element {
  const cursorStyle = cursorEffect === 'loading' ? 'wait' : cursorEffect
  return (
    <span
      className={[
        'Placeholder',
        `Placeholder--${shape}`,
        animate && 'Placeholder--animate'
      ].join(' ')}
      style={{
        cursor: cursorStyle,
        height: height,
        width: width
      }}
      {...props}
    />
  )
}