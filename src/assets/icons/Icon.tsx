import React from 'react'

interface IconProps {
  /**
   * The svg drawing path
   */
  d: string
  /**
   * The size in 'rem'
   */
  size?: number
  /**
   * The path transform definitions
   */
  transform?: string
}

/**
 * This component generates targetable svg icons used by
 * other components.  
 * Use this component when adding custom
 * icons.
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.1.1
 * @param props.d The svg drawing path
 * @param props.transform (optional) The path transform definitions
 * @since 0.1.0
 */
export function Icon({
  d,
  size = 1,
  transform,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{
        display: 'block',
        fill: 'currentcolor',
        height: `${size * 1.5}rem`,
        width: `${size * 1.5}rem`,
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
