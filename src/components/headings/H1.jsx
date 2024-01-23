import React from 'react'

const H1 = ({children,styles }) => {
  return (
    <div className={` text-xl font-bold ${styles} `}>{children}</div>
  )
}

export default H1