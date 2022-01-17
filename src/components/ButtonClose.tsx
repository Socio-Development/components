import React from 'react'
import { CloseIcon } from '../assets/icons/index'
import '../styles/css/buttonClose.css'

export interface ButtonCloseProps {
  /**
   * Button event handler
   */
  onClick: () => void
}

export function ButtonClose({
  onClick,
  ...props
}: ButtonCloseProps) {
  return (
    <button
      className="ButtonClose"
      onClick={ onClick }
      {...props}
    >
      <CloseIcon />
    </button>
  )
}
