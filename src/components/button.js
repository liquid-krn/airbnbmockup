import React from "react";

function Button(props){
    return<button className={props.className} onClick={props.click} onMouseOver={props.over} onMouseOut={props.out} >{props.name}</button>
}
export default Button