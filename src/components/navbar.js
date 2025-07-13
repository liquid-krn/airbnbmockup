import React from "react";
import icons from "./icons";

function Navbar(props) {
  
  return (
    <div className="bg-[#d7527d] w-full text-white text-center flex flex-col items-center font-serif text-sm font-medium py-2">
      <p>{props.announcement}</p>

      <div className="w-full bg-white mt-3 h-16 flex items-center justify-between px-4">
       <div className="">
        <span className="flex gap-2 ml-10">
          {icons.slice(0, 2).map((icon, index) => (
            <button onClick={()=>{console.log(`${index + 1}`)}} className="text-black hover:text-yellow-300 transition duration-300 h-15 w-15" key={index}>{icon}</button>
          ))}
        </span>
        </div> 
        <img src="/image/topilogo.jpg" alt="Topi Logo" />
        <span className="flex gap-2 mr-10">
          {icons.slice(2,4).map((icon, index) => (
            <button onClick={()=>{console.log(`${index+3}`)}} className="text-black hover:text-yellow-300 transition duration-300 h-15 w-15" key={index + 2}>{icon}</button>
          ))}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
