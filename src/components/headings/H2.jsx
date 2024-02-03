import React from 'react'

const H2 = ({children,styles }) => {
  return (
    <div className={` text-lg font-bold ${styles} `}>{children}</div>
  )
}

export default H2