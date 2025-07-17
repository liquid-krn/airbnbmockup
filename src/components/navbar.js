import React, { useState } from "react";
import icons from "./icons";

function Navbar(props) {
  const [openDropdown, setOpenDropdown] = useState(null); 
  const [menuDropdown, setmenuDropdown] = useState(null)
  function toggleDropdown(index){
    setOpenDropdown((prev) => (prev === index ? null : index));
  };
  function mouseover(){
    setmenuDropdown((e)=>{
      console.log(e);
    })
  }
  function mouseout() {
    console.log("moused out");
  }

  return (
    <div className="bg-[#d7527d] w-full text-white text-center flex flex-col items-center font-serif text-sm font-medium py-2 relative z-50">

      <p className="px-2 text-xs sm:text-sm">{props.announcement}</p>

      <div className="w-full bg-white mt-3 h-16 flex items-center justify-between px-4 sm:px-6 relative">
        
     
        <div className="flex items-center space-x-4 ml-4 relative">
          {icons.slice(0, 2).map((icon, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                onMouseEnter={mouseover}
                onMouseLeave={mouseout}
                className="text-gray-500 hover:text-yellow-300 transition duration-300 text-xl sm:text-2xl"
              >
                {icon}
              </button>

            
              {openDropdown === index && (
                <div className="absolute top-14 left-0 bg-white text-black rounded shadow-md py-2 px-4 w-40 text-left z-50">
                  <p className="py-1 hover:bg-gray-100 cursor-pointer">Option A</p>
                  <p className="py-1 hover:bg-gray-100 cursor-pointer">Option B</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <img
          src="/image/topilogo.jpg"
          alt="Topi Logo"
          className="h-10 sm:h-12 object-contain"
        />

        <div className="flex items-center space-x-4 mr-4 relative">
          {icons.slice(2, 4).map((icon, index) => (
            <div key={index + 2} className="relative">
              <button
                onClick={() => toggleDropdown(index + 2)}
                className="text-gray-500 hover:text-yellow-300 transition duration-300 text-xl sm:text-2xl"
              >
                {icon}
              </button>

              {openDropdown === index + 2 && (
                <div className="absolute top-14 right-0 bg-white text-black rounded shadow-md py-2 px-4 w-40 text-left z-50">
                  <p className="py-1 hover:bg-gray-100 cursor-pointer">Option X</p>
                  <p className="py-1 hover:bg-gray-100 cursor-pointer">Option Y</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
