import React from "react";

const Button = (props) => {
    
    return (
        <button className={`Button-${props.appearance}`} onClick={props.onClick} type={props.type}>
            <div iconBefore={props.iconBefore}></div>
            {props.name}
            <div iconAfter={props.iconAfter}></div>
        </button>
    )
}

export default Button;