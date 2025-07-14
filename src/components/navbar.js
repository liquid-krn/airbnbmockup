import React from "react";
import icons from "./icons";

function Navbar(props) {
  return (
    <div className="bg-[#d7527d] w-full text-white text-center flex flex-col items-center font-serif text-sm font-medium py-2">

      <p className="px-2 text-xs sm:text-sm">{props.announcement}</p>

      <div className="w-full bg-white mt-3 h-16 flex items-center justify-between px-4 sm:px-6">
        
 <div className="flex items-center space-x-4 ml-4">
  {icons.slice(0, 2).map((icon, index) => (
    <button
      key={index}
      onClick={() => console.log(`${index + 1}`)}
      className=" text-gray-500 hover:text-yellow-300 transition duration-300 text-2xl"
    >
      {icon}
    </button>
  ))}
</div>
        <img
          src="/image/topilogo.jpg"
          alt="Topi Logo"
          className="h-10 sm:h-12 object-contain"
        />

<div className="flex items-center space-x-4 mr-4">
  {icons.slice(2, 4).map((icon, index) => (
    <button
      key={index + 2}
      onClick={() => console.log(index + 3)}
      className=" text-gray-500 hover:text-yellow-300 transition duration-300 text-xl sm:text-2xl"
    >
      {icon}
    </button>
  ))}
</div>


      </div>
    </div>
  );
}

export default Navbar;
