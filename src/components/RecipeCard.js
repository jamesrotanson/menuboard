import React, {useState} from 'react';
import { CalendarBlank, CalendarCheck, Heart, Trash } from 'phosphor-react';
import Button from './Button';


const RecipeCard = (props) => {

  const [isAddedToPlan, setIsAddedToPlan] = useState(false)


  const handleAddToPlan = () => {
    setIsAddedToPlan(!isAddedToPlan);
  }

  return (
    <li key={props.id} className="Recipe-card">
        <img src={props.imageUrl} className="Recipe-thumbnail" onClick={props.onClick}/>
        <h4 onClick={props.onClick}>{props.name}</h4>
        <small>{props.time} · {props.cost}</small>
        <div className="Button-group">
        <Button 
          onClick={handleAddToPlan} 
          appearance={isAddedToPlan ? "primary" : "secondary"} 
          iconBefore={isAddedToPlan ? <CalendarCheck size={16}/> : <Heart size={16}/>} 
          name={isAddedToPlan ? "Added" : "Add"}
        />
        <Button onClick={props.onDelete} appearance="delete" iconBefore={<Trash/>} name="Delete"/>
        </div>
    </li>
  )
}

export default RecipeCard