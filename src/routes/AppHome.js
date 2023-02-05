import React from 'react';
import Button from '../components/Button';
import Twemoji from 'react-twemoji';

const AppHome = () => {
  return (
    <div className="Page-container">
        <div className="Page-small">

            <div className='Page-header'>
                <div className='Page-title'>
                    <div>
                        <h2>
                            <Twemoji options={{className: 'Twemoji-small'}}>☀️</Twemoji>
                            Good morning
                        </h2>
                        
                    </div>
                </div>
            </div>

            <div>
                Search
            </div>

            <div>
                Search
            </div>

            <div>
                <h5>Personalise your experience</h5>
                <h3>What are your favourite cuisines?</h3>
                <ul>
                    <li>Japanese</li>
                    <li>Indonesian</li>
                </ul>
            </div>

            <div>
                <h3>Do you have any food allergies?</h3>
                <ul>
                    <li>Japanese</li>
                    <li>Indonesian</li>
                </ul>
            </div>

            <div>
                <h3>Popular recipes</h3>
                <div>Recipe card list</div>
            </div>

            <div>
                <h3>Set up your groceries</h3>
                <ul>
                    <li>Connect with Woolworths</li>
                    <li>Connect with Coles</li>
                    <li>Connect with InstaCart</li>
                </ul>
            </div>

            <div>
                Family plan banner
            </div>

        </div>
    </div>
  )
}

export default AppHome