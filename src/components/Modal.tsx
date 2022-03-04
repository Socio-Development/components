import React, { useState } from 'react'
import { ButtonClose } from './ButtonClose'
import '../assets/css/modal.css'

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
 * Primary UI component for pop-up notifications.
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.2.0
 * @since 0.1.0
 * @published
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
      className="Modal__backdrop"
      onClick={ backdropClose ? handleClose : undefined }
    >
      <div
        className={[
          'Modal',
          `Modal--shape-${shape}`,
        ].join(' ')}
        {...props}
      >
        <div className="Modal__header">
          <h5 className="Modal__title">{ title }</h5>
          <ButtonClose onClick={ handleClose } />
        </div>
        <div className="Modal__content">
          { children }
        </div>
      </div>
    </div>
  ) : (
    <div />
  )
}
