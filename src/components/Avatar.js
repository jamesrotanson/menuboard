import React from 'react'

const Avatar = (props) => {
  return (
    <div className={`Avatar Avatar-${props.size}`} onClick={props.onClick}>
        <img src={props.url}/>
    </div>
  )
}

export default Avatar