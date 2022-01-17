import React from 'react'

interface Path {
  d: string
  transform?: string
}

interface IconProps {
  d: string
  transform?: string
}

export function Icon({
  d,
  transform,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{
        display: 'block',
        height: '24px',
        width: '24px'
      }}
      {...props}
    >
      <path
        d={ d }
        transform={ transform }
      />
    </svg>
  )
}
