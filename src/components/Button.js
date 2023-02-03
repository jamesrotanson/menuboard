import React from "react";
import { CaretRight } from "phosphor-react";

const Button = (props) => {
    
    return (
        <button className={`Button-${props.appearance}`} onClick={props.onClick} type={props.type}>
            {props.iconBefore}
            {props.name}
            {props.iconAfter}
        </button>
    )
}

export default Button;