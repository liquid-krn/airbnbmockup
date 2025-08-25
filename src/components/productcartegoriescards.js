import React from "react";
import IMG from "./image";
import Button from "./button";

function Pccards(props) {
  return (
    <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-md">
      <IMG
        src={props.src}
        alt={props.alt}
        imgClassname={props.imgClassname}
      />

      <div className="absolute bottom-4 z-10 ml-3">
        <Button
          className={props.bclassName}
          name={props.name}
          type={props.buttontype}
        />
        <p className="text-white mt-2 font-medium">{props.ptype}</p>
      </div>

    </div>
  );
}

export default Pccards;
