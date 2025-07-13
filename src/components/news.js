import React from "react";
import IMG from "./image";
import Input from "./input";
import Button from "./button";

function News() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] m-auto mt-10 bg-gray-100 p-6 rounded-lg">
      <div>
        <IMG
          src="/image/staytopi.jpg"
          alt="Stay connected"
          imgClassname="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center text-gray-700">
        <p className="text-sm font-semibold">STAY TUNED</p>
        <h1 className="text-3xl mt-2 font-bold">Stay connected to be informed</h1>
        <p className="text-sm mt-3">
          Subscribe to our newsletter to receive our advice, news and special offers!
        </p>

        <Input
          name="newsletter-email"
          placeholder="Your e-mail"
          type="email"
          iclassname="mt-4 border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Button
          name="Subscribe"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        />

        <p className="text-xs mt-4 text-gray-600">
          By registering, you accept our{" "}
          <a href="www.hgj.ku" className="underline text-blue-600">
            Privacy Policy and our General Terms and Conditions
          </a>.
        </p>
      </div>
    </div>
  );
}

export default News;
