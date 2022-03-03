import React from 'react'
import '../assets/css/card.css'

interface CardProps {
  children: JSX.Element | JSX.Element[] | string
  /**
   * The corner shape (border-radius)
   */
  shape?: 'rounded' | 'soft' | 'square'
  title?: string
}

/**
 * Cards contain content and actions about a single subject.
 * 
 * @version 0.2.0
 * @param {CardProps} props The component props
 * @returns {JSX.Element} The Card component
 * @since 0.2.0
 */
export function Card({
  children,
  shape = "soft",
  title,
  ...props
}: CardProps): JSX.Element {
  if (typeof children === 'string') {
    children = (<p>{ children }</p>)
  }
  return (
    <div
      className={[
        'Card',
        `Card--shape-${shape}`
      ].join(' ')}
      {...props}
    >
      { title && <h5 className="Card__title">{ title }</h5> }
      <div className="Card__content">
        { children }
      </div>
    </div>
  )
}
