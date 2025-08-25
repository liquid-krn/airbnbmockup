import React from "react";
import Button from "./button";
import IMG from "./image";

function Amba() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 w-full mx-auto mt-10 bg-gray-100 rounded-lg overflow-hidden shadow-md p-6">
      <div className="px-4">
        <h2 className="text-gray-600 text-3xl font-semibold">BECOME</h2>
        <h2 className="text-gray-600 text-3xl font-semibold mb-2">TOPICREM AMBASSADOR</h2>
        <p className="text-gray-600 text-sm mb-4">You talk about it best!!</p>
        <hr className="mb-4 border-gray-300" />

        <h3 className="text-lg md:text-xl font-medium text-gray-800">
          Sign up for our programs to preview our products and give your opinion!
        </h3>

        <p className="mt-3 text-blue-700 font-semibold text-lg">#TopiFamily</p>

        <Button
          name="BECOME A TOPICREM AMBASSADOR"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md"
        />
      </div>
      <div className="flex justify-center items-center">
        <IMG
          src="/image/ambatopi.jpg"
          alt="ambassador"
          className="w-full h-full max-h-[400px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default Amba;
