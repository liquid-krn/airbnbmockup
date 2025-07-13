import React from "react";

function IMG(props) {
    return (
      <div className="m-auto">
        <img src={props.src} alt={props.alt} className={props.imgClassname}/>
      </div>
    );
  }
  
export default IMG