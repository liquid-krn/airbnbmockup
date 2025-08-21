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
      <div className="bg-gray-600/50 py-5 rounded-lg relative z-10 max-w-xl px-4 sm:px-6 ml-4 sm:ml-10 mt-32 sm:mt-32 w-[90%] sm:w-[80%]">
        <h3 className="text-white font-bold font-serif text-sm sm:text-base md:text-lg mb-2 sm:mb-4">
          {props.top}
        </h3>
        <span className="block text-[#eebb3a] font-serif text-xl sm:text-3xl md:text-4xl mt-2 sm:mt-4 drop-shadow-black w-full">
          {props.mid}
        </span>
        <p className="text-white font-serif text-xs sm:text-base md:text-lg mt-2 sm:mt-4 drop-shadow">
          {props.bottom}
        </p>
        <Button
          name="DECOUVRIR"
          className="hover:bg-[#eebb3a] transition duration-300 text-white border border-white 
          mt-3 sm:mt-4 w-28 sm:w-32 h-9 sm:h-10 font-serif text-xs sm:text-sm"
        />
      </div>
    </div>
  );
}

export default Productcards;
