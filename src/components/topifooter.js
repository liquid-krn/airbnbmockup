import React from "react";
import Input from "./input";
import Button from "./button";

const topifooteroptions = [
  "LEGAL NOTICE",
  "GDPR",
  "GENERAL TERMS AND CONDITIONS",
  "CUSTOMER SERVICE",
  "RECRUITMENT",
  "SITEMAP",
  "COOKIE MANAGEMENT",
];

function Topifooter() {
  return (
    <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] m-auto mt-10 bg-gray-100 p-6 rounded-lg">
    
      <div className="grid gap-2">
      <h1 className="m-auto text-lg font-semibold mb-2">ADDITIONAL INFORMATION</h1>
        {topifooteroptions.map((item, index) => (
          <Button
            key={index}
            name={item}
            className="text-gray-700 hover:text-blue-300 transition-colors text-sm"
          />
        ))}
      </div>

      
      <div>
        <h1 className="text-lg font-semibold mb-2">Newsletter</h1>
        <p className="text-sm text-gray-600 mb-4">
          Subscribe to our newsletter to receive our advice, news, and special offers!
        </p>

        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <Input
            placeholder="Enter your email"
            iclassname="flex-1 border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
          />
          <Button name="Subscribe" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition border border-black-100" />
        </div>

        <label className="flex items-center text-sm text-gray-700 gap-2">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
          I would like to receive the Topicrem newsletter.
        </label>
      </div>
    </div>
  );
}

export default Topifooter;
