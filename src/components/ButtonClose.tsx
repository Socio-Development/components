import React from 'react'
import { Close } from '../assets/icons/Close'
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
      <Close />
    </button>
  )
}
