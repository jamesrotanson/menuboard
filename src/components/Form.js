import React, {useState} from 'react'
import Button from './Button'

const Form = (props) => {
    
    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange}/>
                <Button name="submit" type="submit" appearance="default" onClick={handleSubmit}/>
            </form>
        </div>

    )
}

export default Form