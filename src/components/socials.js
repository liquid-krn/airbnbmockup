import React from "react";
import icons from "./icons";
import Button from "./button";

function Socials() {
  return (
    <div className="text-center my-10">
      <h1 className="text-xl font-semibold">FOLLOW US ON SOCIAL MEDIA</h1>
      <h2 className="text-gray-600 mb-4">@topicrem_france</h2>

      <div className="flex justify-center gap-4">
        {icons.slice(4).map((icon, index) => (
          <Button key={index} name={icon} />
        ))}
      </div>
      
    </div>
  );
}

export default Socials;
