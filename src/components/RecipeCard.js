import React, {useState} from 'react';
import { CalendarCheck, Heart, Pencil, Trash } from 'phosphor-react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { deleteRecipe, updateRecipe } from '../reducers/recipeReducer';
import { increasePlanCount } from '../reducers/planSlice';


const RecipeCard = (props) => {

  const [isAddedToPlan, setIsAddedToPlan] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleAddToPlan = () => {
    setIsAddedToPlan(!isAddedToPlan);
  }

  const handleImageLoaded = () => {
    setImageLoaded(true);
  }

  const dispatch = useDispatch();

  // Delete doesn't work yet
  const handleDelete = () => {
    console.log('delete');
    dispatch(deleteRecipe(props.id));
  }

  const handleUpdate = () => {
    // dispatch(updateRecipe());
    dispatch(increasePlanCount());
  }

  return (
    <li key={props.id} className="Recipe-card">
        {props.imageUrl ? 
          <img src={props.imageUrl} alt="Recipe thumbnail" className="Recipe-thumbnail" onClick={props.onClick} onLoad={handleImageLoaded}/>
          :
          <img src={require("../images/food-illos.png")} alt="Recipe thumbnail" className="Recipe=thumbnail" onClick={props.onClick}/>
        }
        <h4 onClick={props.onClick}>{props.name}</h4>
        <small>{props.time} · {props.cost}</small>
        <div className="Button-group">
        <Button 
          onClick={handleAddToPlan} 
          onKeyDown={handleAddToPlan}
          appearance={isAddedToPlan ? "primary" : "secondary"} 
          iconBefore={isAddedToPlan ? <CalendarCheck size={16}/> : <Heart size={16}/>} 
          name={isAddedToPlan ? "Added" : "Add"}
        />
        {/* <Button 
          onClick={handleUpdate} 
          onKeyDown={handleUpdate}
          role="button" 
          tabIndex={0} 
          appearance="default" 
          iconBefore={<Pencil/>} 
          name="Edit"
        /> */}
        <Button 
          onClick={handleDelete} 
          onKeyDown={handleDelete}
          role="button" 
          tabIndex={0}
          appearance="delete" 
          iconBefore={<Trash/>} 
          name="Delete"
        />
        </div>
    </li>
  )
}

export default RecipeCard