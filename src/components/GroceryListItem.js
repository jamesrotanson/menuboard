import React from 'react'
import Button from './Button'
import { X, DotsSixVertical} from 'phosphor-react'

const GroceryListItem = (props) => {
  return (
    <li className='Grocery-cart-item' 
        key={props.key} 
        
    >
        <DotsSixVertical/>
        <label className="Checkbox">
            <input type="checkbox"/>
            <span className="Checkmark"></span>
        </label>
        {/* <input type="checkbox" className='Checkbox'/> */}
        <input className="Form-input Form-input-subtle flex-grow" value={props.name}/>
        <Button onClick={props.onDelete} appearance="delete Button-icon" iconBefore={<X/>}/>
    </li>
  )
}

export default GroceryListItem