import React from 'react'
import Button from './Button'

const ConnectAppsActions = () => {
  return (
    <ul className='Button-group-vertical'>
        <li><Button name="Connect to Woolworths" appearance="connect" iconBefore={<img className="Button-img" src={require("../images/woolies-logo.png")}/>}/></li>
        <li><Button name="Connect to HelloFresh" appearance="connect" iconBefore={<img className="Button-img" src={require("../images/hellofresh-logo.png")}/>}/></li>
        <li><Button name="Connect to Coles" appearance="connect" iconBefore={<img className="Button-img" src={require("../images/coles-logo.png")}/>}/></li>
        <li><Button name="Connect to Aldi" appearance="connect" iconBefore={<img className="Button-img" src={require("../images/aldi-logo.png")}/>}/></li>
    </ul>
  )
}

export default ConnectAppsActions