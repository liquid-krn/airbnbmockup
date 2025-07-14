import React from "react";
import Button from "./button";
import IMG from "./image";

function Productcards(props) {
  return (
    <div className="w-full relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <IMG
          src={props.imgsrc}
          alt={props.imgalt}
          imgClassname="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-xl px-4 sm:px-6 ml-4 sm:ml-10 mt-32 sm:mt-47">
        <h3 className="font-serif text-base text-black sm:text-white">
          {props.top}
        </h3>

        <h1 className="font-serif text-2xl sm:text-4xl mt-4 text-black sm:text-[#eebb3a] drop-shadow sm:drop-shadow-lg">
          {props.mid}
        </h1>
        <p className="font-serif text-lg mt-4 text-black sm:text-white drop-shadow sm:drop-shadow-md">
          {props.bottom}
        </p>
      <Button
          name="DECOUVRIR"
          className="text-black sm:text-white border border-black sm:border-white mt-5 w-32 h-10 font-serif text-sm sm:text-base"
        />
      </div>
    </div>
  );
}

export default Productcards;
