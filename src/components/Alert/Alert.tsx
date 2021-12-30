import React from 'react'
// CSS
import './Alert.css'

export interface AlertProps {
  label: string
}

export default function Alert({
  label
}: AlertProps) {
  return (
    <div className="Alert">
      { label }
    </div>
  )
}
