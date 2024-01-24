import React from 'react'

const Button = ({text, clr, onClick}) => {
  return <button onClick={onClick} style={{ color : clr}} >{text}</button>
}

export default Button