import React from 'react'

export function Close({...props}) {
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
        d="M12.288-246.3,7-251.586,1.712-246.3A1,1,0,0,1,1-246a1,1,0,0,1-1-1,1,1,0,0,1,.293-.707L5.586-253,.3-258.289A1,1,0,0,1,0-259a1,1,0,0,1,1-1,1,1,0,0,1,.715.3L7-254.414l5.285-5.285A1,1,0,0,1,13-260a1,1,0,0,1,1,1,1,1,0,0,1-.3.711L8.414-253l5.293,5.293A1,1,0,0,1,14-247a1,1,0,0,1-1,1A1,1,0,0,1,12.288-246.3Z"
        transform="translate(5 265)"
      />
    </svg>
  )
}
