import React, { useState } from 'react'
import { TMode } from '../index'
import { ButtonClose } from './ButtonClose'
import '../styles/css/modal.css'

export interface ModalProps {
  /**
   * Enables the ability to close by clicking outside the modal
   */
  backdropClose?: boolean
  /**
   * The component children
   */
  children: JSX.Element | JSX.Element[]
  /**
   * The corner shape (border-radius)
   */
  shape?: 'rounded' | 'soft' | 'square'
  /**
   * The heading at the top
   */
  title: string
}

/**
 * Primary UI component for pop-up notifications
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.1.0
 * @since 0.1.0
 * @global
 */
export function Modal({
  backdropClose = true,
  children,
  shape = 'soft',
  title,
  ...props
}: ModalProps) {
  const [isActive, setIsActive] = useState(true)

  const handleClose = () => {
    setIsActive(false)
  }

  return isActive ? (
    <div
      className="Modal--backdrop"
      onClick={ backdropClose ? handleClose : undefined }
    >
      <div
        className={[
          'Modal',
          `Modal--${shape}`,
        ].join(' ')}
        {...props}
      >
        <div className="Modal--header">
          <h5 className="Modal--title">{ title }</h5>
          <ButtonClose onClick={ handleClose } />
        </div>
        <div className="Modal--content">
          { children }
        </div>
      </div>
    </div>
  ) : (
    <div />
  )
}
