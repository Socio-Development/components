import React from 'react'
import { Close } from '../assets/icons/Close'
import '../styles/css/buttonClose.css'

export interface ButtonCloseProps {
  onClick?: () => {}
}

export function ButtonClose({
  onClick,
  ...props
}: ButtonCloseProps) {
  return (
    <button
      className={[
        'ButtonClose'
      ].join(' ')}
      onClick={ onClick }
      {...props}
    >
      <Close />
    </button>
  )
}
