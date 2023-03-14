import React, {useState} from 'react';
import { CalendarCheck, Heart, Pencil, Trash } from 'phosphor-react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { deleteRecipe, scheduleRecipe } from '../reducers/recipeReducer';
import { increasePlanCount } from '../reducers/planSlice';
import {v4 as uuid} from 'uuid';
import { toast } from 'react-hot-toast';
import {db} from "../firebase-config"
import {
    deleteDoc, 
    doc,
} from "firebase/firestore"


const RecipeCard = (props, recipe) => {

  const [isAddedToPlan, setIsAddedToPlan] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)


  const dispatch = useDispatch();

  const handleAddToPlan = (event) => {
    event.preventDefault();
    setIsAddedToPlan(!isAddedToPlan);

    console.log(isAddedToPlan)
    if(props.name){
      dispatch(
        scheduleRecipe({
          id: uuid(),
          name: props.name,
          imageUrl: props.imageUrl,
          time: props.time,
          cost: props.cost,
          ingredients: props.ingredients,
          instructions: props.instructions,
          planned: isAddedToPlan
        })
      )
      
      toast.success("Recipe successfully added to plan!")
    }
    else {
      toast.error("Failed to add plan")
    }
  }



  const handleImageLoaded = () => {
    setImageLoaded(true);
  }

  // Delete doesn't work yet
  const handleDelete = (id) => {
    console.log('delete');
    // dispatch(deleteRecipe(props.id));
    // dispatch(unscheduleRecipe(recipe.id))
    deleteDoc(doc(db, "recipes", id))
  }

  const handleUpdate = () => {
    // dispatch(updateRecipe());
    dispatch(increasePlanCount());
  }

  

  return (
    <li key={props.id} className="Recipe-card" >
        {props.imageUrl ? 
          <img src={props.imageUrl} alt="Recipe thumbnail" className="Recipe-thumbnail" onClick={props.onClick} onLoad={handleImageLoaded}/>
          :
          <img src={require("../images/food-illos.png")} alt="Recipe thumbnail" className="Recipe-thumbnail" onClick={props.onClick}/>
        }
        <div className='Recipe-card-content'>
          <h4 onClick={props.onClick}>{props.name}</h4>
          <small> {props.cost && "Est. "}  {props.time} · {props.cost} {props.cost && "/servings"}</small>
          <div className="Button-group">
          <Button 
            onClick={handleAddToPlan} 
            onKeyDown={handleAddToPlan}
            appearance={isAddedToPlan ? "primary" : "secondary"} 
            iconBefore={isAddedToPlan ? <CalendarCheck size={16}/> : <Heart size={16}/>} 
            name={isAddedToPlan ? "Added" : "Add"}
          />
          {props.nonEditable ? <Button 
            onClick={props.onEdit}
            onKeyDown={props.onEdit}
            role="button" 
            tabIndex={0}
            appearance="default" 
            // iconBefore={<Pencil/>} 
            name="Edit"
          /> : null}
          {props.nonEditable ? 
            <Button 
              onKeyDown={props.onDelete}
              onClick={props.onDelete}
              role="button" 
              tabIndex={0}
              appearance="delete" 
              // iconBefore={<Trash/>} 
              name="Delete"
            />
            : null
           }
          
          </div>
        </div>
    </li>
  )
}

export default RecipeCard