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
        width={880}
        header={null}
        footer={null}
        maskTransitionName=""
        style={{ top: 40 }}
    >
        <div className='Modal-content-wrapper'>
            {props.imageUrl ? 
                <img src={props.imageUrl} alt="Recipe cover" className="Recipe-cover"/>
                :
                <img src={props.uploadedImageUrl} alt="uploaded recipe" className={props.uploadedImageUrl ? "Recipe-cover" : "Recipe-cover-empty"}/>
            }
            <div className="Modal-content-container">
                <div className="Recipe-create-modal" style={{paddingTop: props.uploadedImageUrl ? "" : "64px" }}>
                <form className='Form' onSubmit={props.onSubmit}>
                    <div className='Form-input-container'>
                        {/* <label htmlFor="name">Recipe name</label> */}
                        <input 
                            autoFocus="autofocus"
                            type="text" 
                            placeholder="New recipe"
                            className='Form-input-title'
                            value={props.recipeNameValue}
                            onChange={props.recipeNameOnChange}
                        />
                    </div>
                    
                    <textarea 
                        type="text" 
                        placeholder="Share a little more about this dish. What or who inspired you to cook it? What makes it special to you? What's your favourite way to eat it? Use @ to tag others"
                        className='Form-input-subtle'
                        value={props.recipeDescriptionValue}
                        onChange={props.recipeDescriptionOnChange}
                    />

                    <div className='Form-input-container'>
                        <label htmlFor="imageUrl">Cover image</label>
                        <input 
                            type="text" 
                            placeholder='Paste image url here'
                            className='Form-input'
                            value={props.uploadedImageUrl}
                            onChange={props.uploadedImageOnChange}
                        />
                    </div>

                    <div className='Form-input-container'>
                        <label htmlFor="name">Plan for</label>
                        <input type="date" 
                            value={props.recipeDateValue}
                            onChange={props.recipeDateOnChange}
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
                        <Button type="button" name="Cancel" appearance="default" onClick={props.onCancel}/>
                        <Button type="submit" name="Create" appearance="primary" onClick={props.handleCreate}/>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </Modal>
  )
}

export default CreateRecipeModal