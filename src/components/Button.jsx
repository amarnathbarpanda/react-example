import React from 'react'
import HOC from './HOC';

const Button = (props) => {
  return (
    <div style={props.style}>Hello...</div>
  )
}

export default HOC(Button);