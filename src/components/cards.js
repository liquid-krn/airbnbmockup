import React from "react";
import IMG from "./image";

function Cards(props) {
    return<div className="mt-5 m-auto bg-white pb-6">
    <IMG src={props.src} alt={props.alt} className={props.className} />
    <div className="text-center font-sans mt-9">
   <p className="font-sans text-gray-500 text-sm  font-semibold">{props.top}</p>
   <h1 className="font-sans font-semibold">{props.mid}</h1>
   <h1 className="font-sans font-bold">{props.ubottom}</h1>
   <p className="font-sans text-gray-500 font-semibold">{props.umid}</p>
   <h4 className="text-gray-500 font-semibold text-xl font-sans">{props.lbottom}</h4>
   </div>
    </div>
}
export default Cards