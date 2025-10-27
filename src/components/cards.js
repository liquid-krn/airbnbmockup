import React from "react";
import IMG from "./image";

function Cards(props) {
    return<div className="cursor-pointer font-sans p-1 mt-5 m-auto bg-white w-[90%]">
    <IMG src={props.src} alt={props.alt} imgClassname={props.imgClassname} />
    <div className="text-center font-sans mt-7 h-50">
        <div className="text-gray-500 text-sm h-8"><p>{props.top}</p></div>
        <div className="text-sm/5 h-7"><p>{props.mid}</p></div>
        <div className="text-sm h-10"><p>{props.ubottom}</p></div>
        <div className="text-sm text-gray-500 h-7"><p>{props.umid}</p></div>
        <div className="text-gray-500  font-bold font-xl"><h4>{props.lbottom}</h4></div>
   </div>
    </div>
}
export default Cards