import React from "react";

function Input(props) {
    return<input className={props.iclassname} name={props.name} placeholder={props.placeholder} type={props.type}></input>
}
export default Input