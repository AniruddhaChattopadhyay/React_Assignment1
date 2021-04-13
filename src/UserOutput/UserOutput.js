import React from 'react'
import './UserOutput.css'
const UserOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>Username : {props.userName}</p>
      <p>Hey I AM Paragraph 2</p>
    </div>
  )
}

export default UserOutput;