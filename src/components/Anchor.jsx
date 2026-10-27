import React from 'react'

const Anchor = ({herf, className, children}) => {
  return (
    <a href={herf} className={className}>
        {children}
    </a>
  )
}

export default Anchor