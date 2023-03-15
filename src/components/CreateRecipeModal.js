import React from 'react'
import Modal from 'antd/es/modal/Modal'
import Button from './Button'
import { Plus } from 'phosphor-react'

const CreateRecipeModal = (props) => {
  return (
    <Modal
        open={props.open}
        onOk={props.onOk}
        onCancel={props.onCancel}
        footer={null}
        maskTransitionName=""
    >
        <div className="Recipe-create-modal">
        <h2> New recipes</h2>
        <input type="date" 
            value={props.recipeDateValue}
            onChange={props.recipeDateOnChange}
        />
        {/* <div>Tuesday 15 March 2023</div> */}
        <form className='Form' onSubmit={props.onSubmit}>
            {/* <input 
                type="file"
                accept="image/png, image/jpeg, image/*"
                id="img"
                name="img"
                value={props.uploadedImageUrl}
                onChange={props.uploadedImageOnChange}
            /> */}
            <input 
                type="text" 
                placeholder='Paste image url here'
                className='Form-input'
                value={props.uploadedImageUrl}
                onChange={props.uploadedImageOnChange}
            />
            <img alt="uploaded recipe" src={props.uploadedImageUrl}/>
            <div className='Form-input-container'>
                <label htmlFor="name">Recipe name</label>
                <input 
                    autoFocus
                    type="text" 
                    placeholder="Name"
                    className='Form-input'
                    value={props.recipeNameValue}
                    onChange={props.recipeNameOnChange}
                />
            </div>
            <div className='Form-input-container'>
                <label htmlFor="name">Recipe description</label>
                <textarea 
                    type="text" 
                    placeholder="Name"
                    value={props.recipeDescriptionValue}
                    onChange={props.recipeDescriptionOnChange}
                />
            </div>
            
            <div className='Form-input-container'>
                <label htmlFor="name">Ingredients</label>
                {props.recipeIngredients}
                <Button type="button" name="Add ingredient" iconBefore={<Plus/>} appearance="default" onClick={props.handleIngredientCount}/>
            </div>
            <div className='Form-input-container'>
                <label htmlFor="name">Steps</label>
                {props.recipeSteps}
                <Button type="button" name="Add steps" appearance="default" iconBefore={<Plus/>} onClick={props.handleStepCount}/>
            </div>
            <div className='Button-group'>
                <Button type="submit" name="Create" appearance="primary" onClick={props.handleCreate}/>
                <Button type="button" name="Cancel" appearance="default" onClick={props.onCancel}/>
            </div>
        </form>
        </div>
    </Modal>
  )
}

export default CreateRecipeModal