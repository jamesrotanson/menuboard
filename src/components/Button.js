import { CaretRight } from "phosphor-react";
import React from "react";

const Button = (props) => {
    
    return (
        <button className={`Button-${props.appearance}`} onClick={props.onClick} type={props.type}>
            {props.name}
        </button>
    )
}

export default Button;