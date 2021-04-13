import React from 'react'

const UserInput = (props) => {
  const inputStyle = {
    border : '2px red solid'
  }
  return (
    <div>
      <input type='text' 
      onChange={props.changed} 
      value={props.currentName}
      style={inputStyle}></input>
    </div>
  )
}

export default UserInput
