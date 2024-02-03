import React from 'react'

const PSm = ({children,styles }) => {
    return (
      <div className={` text-md ${styles} `}>{children}</div>
    )
  }

export default PSm