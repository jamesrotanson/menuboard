import React, { useState } from 'react'
import { ThumbsUp, ThumbsDown } from 'phosphor-react'
import Button from './Button'
import {db} from "../firebase-config"
import {
    collection,
    doc, 
    addDoc, 
} from "firebase/firestore"

const FeedbackCollector = () => {

    const [toggleLike, setToggleLike] = useState(false)
    const [toggleDislike, setToggleDislike] = useState(false)
    

    const handleLike = () => {
        setToggleLike(!toggleLike)
    }

    const handleDislike = () => {
        setToggleDislike(!toggleDislike)
    }

    const handleCloseFeedback = () => {
        setToggleLike(false)
    }

    const [feedbackForm, setFeedbackForm] = useState({
        feedbackTitle: "", 
    })

    const feedbackCollectionRef = collection(db, "feedback")

    const handleSubmitFeedback = (event) => {
        // event.preventDefault();
        console.log("Submit")
        addDoc(feedbackCollectionRef, feedbackForm)

        setFeedbackForm({
            feedbackTitle: "",
        })

        setToggleLike(false);
        setToggleDislike(false);
    }


    return (
        <div className='Feedback-container'>
            <h4>Do you find this page helpful?</h4>
            <br></br>
            <div className='flex'>
                <div 
                    className={toggleLike ? 'Feedback-rating-bubble Feedback-rating-bubble-active' : 'Feedback-rating-bubble'} 
                    onClick={handleLike}
                >
                    <ThumbsUp size={24}/>
                </div>
                <div
                    className={toggleDislike ? 'Feedback-rating-bubble Feedback-rating-bubble-active' : 'Feedback-rating-bubble'} 
                    onClick={handleDislike}
                >
                    <ThumbsDown size={24}/>
                </div>
            </div>
            <br></br>
            {/* {JSON.stringify(feedbackForm)} */}
            {toggleLike ? 
                (
                    <form className="Form">
                        <label>🙏 Thank you for being awesome! <br></br>Why did you give this rating?</label>
                        <textarea
                            autoFocus
                            placeholder='Let us know any feedback, thoughts, and suggestions'
                            onChange={(event) => setFeedbackForm({...feedbackForm, feedbackTitle: event.target.value})}
                        />
                        <div className="Button-group">
                            <Button name="Submit" appearance="primary" onClick={() => handleSubmitFeedback()}/>
                            <Button name="Cancel" appearance="default" onClick={handleCloseFeedback}/>
                            
                        </div>
                    </form>
                )
                :
                null
            }
            

            {toggleDislike ? 
                (
                    <form className='Form'>
                        <label>😓 We're sorry to hear that. <br></br>How can we improve your experience?</label>
                        <textarea
                            autoFocus
                            placeholder='Let us know any feedback, thoughts, and suggestions'
                            onChange={(event) => setFeedbackForm({...feedbackForm, feedbackTitle: event.target.value})}
                        />
                        <div className="Button-group">
                            <Button name="Submit" appearance="primary" onClick={() => handleSubmitFeedback()}/>
                            <Button name="Cancel" appearance="default" onClick={handleCloseFeedback}/>
                            
                        </div>
                    </form>
                )
                :
                null
            }
        </div>
    )
}

export default FeedbackCollector