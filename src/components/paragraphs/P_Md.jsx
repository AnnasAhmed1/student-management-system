import React from 'react'

const PMd = ({children,styles }) => {
  return (
<div className={` text-lg ${styles} `}>{children}</div>
  )
}

export default PMd