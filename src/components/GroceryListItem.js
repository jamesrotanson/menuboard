import React from 'react'
import Button from './Button'
import { X, DotsSixVertical} from 'phosphor-react'

const GroceryListItem = (props) => {
  return (
    <li className='Grocery-cart-item' 
        key={props.key} 
        
    >
        <DotsSixVertical/>
        <input type="checkbox" className='Checkbox'/>
        <input className="Form-input" value={props.name}/>
        <Button onClick={props.onDelete} appearance="delete" iconBefore={<X/>}/>
    </li>
  )
}

export default GroceryListItem