import React from "react";

const options=["Home", "ULTRA-MOISTURIZING", "BODY MILK"]

function About() {
    return<div className="w-full flex">
    {options.map((option, index)=>(
        <div key={index} className="bg-green-100 text-center w-45 font-serif text-sm">
            {option}
        </div>
    ))}
    </div>
}

export default About