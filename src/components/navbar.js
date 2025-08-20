import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import icons from "./icons";
import Button from "./button";
import Input from "./input";

const burger = [
  "YOUR NEEDS",
  "OUR PRODUCTS-CARDS",
  "RIGHT NOW",
  "OUR ADVICE",
  "OUR LABORATORY"
];

function Navbar(props) {
  const [activeIcon, setActiveIcon] = useState(null); // store which icon is active
  const navigate = useNavigate();

  function handleClick(index) {
    if (index === 2) {
      navigate("/location"); 
    }else if(index === 3){
        navigate("/signin");
    } else {
      setActiveIcon(prev => (prev === index ? null : index));
    }
  }

  return (
    <div className="w-full">
      <div className="bg-[#d7527d] w-full text-white text-center flex flex-col items-center font-serif text-sm font-medium py-2 relative z-50">
        <p className="px-2 text-xs sm:text-sm">{props.announcement}</p>

        <div className="w-full bg-white mt-3 h-16 flex items-center justify-between px-4 sm:px-6 relative">
         
          <div className="flex items-center space-x-4 ml-4 relative">
            {icons.slice(0, 2).map((icon, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => handleClick(index)}
                  className="text-gray-500 hover:text-yellow-300 transition duration-300 text-xl sm:text-2xl"
                >
                  {icon}
                </button>
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
                  onClick={() => handleClick(index + 2)}
                  className="text-gray-500 hover:text-yellow-300 transition duration-300 text-xl sm:text-2xl"
                >
                  {icon}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {activeIcon === 0 && (
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white w-[90%] mt-2 p-4 rounded shadow grid grid-cols-2 gap-4">
          {burger.map((item, index) => (
            <Button
              key={index}
              name={item}
              className="block w-full text-left px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded"
            />
          ))}
        </div>
      )}
        {activeIcon === 1 && (
       <div className="fixed absolute left-1/2 transform -translate-x-1/2 z-10 bg-white w-[90%] mt-2 p-6 rounded-2xl shadow-lg">
        <Input iclassname="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300 shadow-sm" placeholder="Type something..." />
      </div>
      )}
      
    </div>
  );
}

export default Navbar;
