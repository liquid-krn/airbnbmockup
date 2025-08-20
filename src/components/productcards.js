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
      <div className="bg-gray-600/50 py-5 rounded-lg relative z-10 max-w-xl px-6 ml-10 mt-30 w-[80%]">
        <h3 className="text-white font-bold font-serif text-base mb-4">
          {props.top}
        </h3>
        <span className=" p-1 text-[#eebb3a] font-serif text-3xl sm:text-4xl mt-4 drop-shadow-black w-full">
          {props.mid}
        </span>
        <p className="drop-shadow text-white font-serif text-lg mt-4">
          {props.bottom}
        </p>

        <Button
          name="DECOUVRIR"
          className="hover:bg-[#eebb3a] transition duration-300 text-white border border-white mt-4 w-32 h-10 font-serif"
        />
      </div>
    </div>
  );
}

export default Productcards;
