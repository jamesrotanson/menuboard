import React from 'react';
import { Notepad, Trash } from 'phosphor-react';
import Button from './Button';


const RecipeCard = (props) => {
  return (
    <li key={props.id} className="Recipe-card" onClick={props.onClick}>
        <img src={props.imageUrl} className="Recipe-thumbnail"/>
        <h4>{props.name}</h4>
        <small>{props.time} · {props.cost}</small>
        <div className="Button-group">
        <button className="Button-default">
            <Notepad size={16}/>Add
        </button>
        <Button onClick={props.onClick} appearance="delete" iconBefore={<Trash/>} name="Delete"/>
        </div>
    </li>
  )
}

export default RecipeCard