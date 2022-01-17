import React from 'react'
import { CloseIcon } from '../assets/Icons'
import '../styles/css/buttonClose.css'

export interface ButtonCloseProps {
  /**
   * Button event handler
   */
  onClick: () => void
}

/**
 * Adds a closing button to dismissable components
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.1.0
 * @since 0.1.0
 */
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
