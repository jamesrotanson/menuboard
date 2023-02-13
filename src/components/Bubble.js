import React from 'react'
import Twemoji from 'react-twemoji'

const Bubble = (props) => {
  
  const handleSelect = (event) => {
    event.currentTarget.classList.toggle('Bubble-option-active')
  }

  return (
    <div className='Bubble-option' onClick={handleSelect}>
        <Twemoji options={{className: 'Twemoji-small'}}>
            <p>{props.icon}</p>
        </Twemoji>
        
        <p>{props.name}</p>
    </div>
  )
}

export default Bubble