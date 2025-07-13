import React from "react";

function Button(props){
    return<button className={props.className} onClick={props.click} onMouseOver={props.over} >{props.name}</button>
}
export default Button