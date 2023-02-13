import React from 'react';
import { Calendar, Notepad, Trash } from 'phosphor-react';
import Button from './Button';


const RecipeCard = (props) => {

  return (
    <li key={props.id} className="Recipe-card" onClick={props.onClick}>
        <img src={props.imageUrl} className="Recipe-thumbnail"/>
        <h4>{props.name}</h4>
        <small>{props.time} · {props.cost}</small>
        <div className="Button-group">
        <Button onClick={props.onAdd} appearance="secondary" iconBefore={<Notepad/>} name="Add"/>
        <Button onClick={props.onDelete} appearance="delete" iconBefore={<Trash/>} name="Delete"/>
        </div>
    </li>
  )
}

export default RecipeCard