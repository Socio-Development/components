import React from 'react'

export interface TestPageProps {
  children: JSX.Element | JSX.Element[]
}

/**
 * Page for testing component behaviour
 * @author [CasperSocio](https://github.com/CasperSocio)
 * @version 0.2.0
 * @since 0.1.0
 */
export function TestPage({
  children,
  ...props
}: TestPageProps) {
  return (
    <div
      className="TestPage"
      style={{
        margin: '0 auto',
        maxWidth: '600px'
      }}
      {...props}
    >
      <div className="TestPage__content">
        { children }
      </div>
    </div>
  )
}
