import React from 'react'

const Logo = ({ src ,alt, style1 , style2}) => {
  return (
    <h1 className={`${style1}`}>
      <img src={src} alt={alt} className={`${style2}`} />
    </h1>
  )
}

export default Logo