import React from 'react'

export interface TestPageProps {
  children: JSX.Element | JSX.Element[]
}

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
      <div className="TestPage--content">
        { children }
      </div>
    </div>
  )
}
