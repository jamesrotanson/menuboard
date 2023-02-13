import React from 'react'

const LoadingPage = (props) => {
  return (
    <div className='Loading-container'>
      {/* <img src={require("../images/character-sushi.png")} className="Recipe-thumbnail"/> */}
      <div className='Loader'></div>
      <h3 className="Loader-quote">{props.loadHeaderMessage}</h3>
      {/* <p className='Loader-author'>Mum</p> */}
    </div>
  )
}

export default LoadingPage