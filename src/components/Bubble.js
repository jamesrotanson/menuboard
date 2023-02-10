import React from 'react'
import Twemoji from 'react-twemoji'

const Bubble = (props) => {
  return (
    <li className='Bubble-option'>
        <Twemoji options={{className: 'Twemoji-small'}}>
            <p>{props.icon}</p>
        </Twemoji>
        <h5>{props.name}</h5>
    </li>
  )
}

export default Bubble