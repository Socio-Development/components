import React, { useState } from 'react'
import { TMode } from '../index'
import '../styles/css/modal.css'
import { ButtonClose } from './ButtonClose'

export interface ModalProps {
  /**
   * Enable close by backdrop click?
   */
  backdropClose?: boolean
  children: JSX.Element | JSX.Element[]
  mode?: TMode
  shape?: 'rounded' | 'soft' | 'square'
  title: string
}

export function Modal({
  backdropClose = true,
  children,
  mode = 'default',
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
          `Modal--${mode}`,
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
