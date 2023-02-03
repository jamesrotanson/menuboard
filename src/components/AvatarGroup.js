import React from 'react'
import Avatar from './Avatar'
import Avatar1 from "../images/memoji-01.png"
import Avatar2 from "../images/memoji-02.png"

const AvatarGroup = (props) => {
  return (
    <div className='Avatar-group'>
        <Avatar url={Avatar1} size={props.size}/>
        <Avatar url={Avatar2} size={props.size}/>
    </div>
    
  )
}

export default AvatarGroup