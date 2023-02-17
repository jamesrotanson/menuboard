import React, {useState} from 'react';
import { CalendarBlank, CalendarCheck, Heart, Trash } from 'phosphor-react';
import Button from './Button';
import { connect } from 'react-redux';


const RecipeCard = (props) => {

  const [addToPlanVisible, setAddToPlanVisible] = useState(true)
  const [addedToPlanVisible, setAddedToPlanVisible] = useState(false)


  const handleAddToPlan = () => {
    setAddToPlanVisible(false);
    setAddedToPlanVisible(true);
    props.dispatch({type: "INCREASE_PLAN_COUNT"})
  }

  const handleRemoveFromPlan = () => {
    setAddToPlanVisible(true);
    setAddedToPlanVisible(false);
    props.dispatch({type: "DECREASE_PLAN_COUNT"})
  }

  return (
    <li key={props.id} className="Recipe-card">
        <img src={props.imageUrl} className="Recipe-thumbnail" onClick={props.onClick}/>
        <h4 onClick={props.onClick}>{props.name}</h4>
        <small>{props.time} · {props.cost}</small>
        <div className="Button-group">
        {addToPlanVisible ? <Button name="Add" iconBefore={<Heart size={16}/>} appearance="secondary" onClick={handleAddToPlan}/> : null}
        {addedToPlanVisible ? <Button name="Added" iconBefore={<CalendarCheck size={16}/>} appearance="primary" onClick={handleRemoveFromPlan}/> : null}
        <Button onClick={props.onDelete} appearance="delete" iconBefore={<Trash/>} name="Delete"/>
        </div>
    </li>
  )
}

const mapStateToProps = (state) => ({
  count: state.count
})

export default connect(mapStateToProps)(RecipeCard);