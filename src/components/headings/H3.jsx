import React from 'react'

const H3 = ({children,styles }) => {
    return (
      <div className={`  font-bold ${styles} `}>{children}</div>
  )
}

export default H3