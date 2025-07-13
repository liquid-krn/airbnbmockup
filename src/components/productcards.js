import React from "react";
import Button from "./button";
import IMG from "./image";

function Productcards(props) {
  return (
    <div className="w-full relative h-[400px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <IMG
          src={props.imgsrc}
          alt={props.imgalt}
          imgClassname="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-xl px-6 ml-10 mt-40">
        <h3 className="text-white font-serif text-base">
          {props.top}
        </h3>
        <h1 className="text-[#eebb3a] font-serif text-4xl mt-4 drop-shadow">
          {props.mid}
        </h1>
        <p className="drop-shadow text-white font-serif text-lg mt-4">
          {props.bottom}
        </p>

        <Button
          name="DECOUVRIR"
          className="text-white border border-white mt-4 w-32 h-10 font-serif"
        />
      </div>
    </div>
  );
}

export default Productcards;
