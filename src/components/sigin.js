import React from "react";
import Input from "./input";
import Button from "./button";

function Signin() {
  return (
    <div className="flex items-center justify-center pb-10 pt-10 mt-10 bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Login</h1>
          <p className="text-sm text-gray-500 mt-2">
            Welcome back! Please sign in to continue.
          </p>
        </div>
        <div className="bg-pink-50 border border-pink-100 text-pink-700 text-sm rounded-lg p-4 mb-6">
          To reactivate your customer account and find your order history,{" "}
          <a href="#" className="text-pink-600 font-medium hover:underline">
            click here
          </a>
          .
        </div>
        <form className="space-y-4">
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Email address"
              iclassname="w-full rounded-lg border border-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-pink-400 
                         focus:border-pink-400 transition-all duration-300 
                         shadow-sm placeholder-gray-400"
            />
            <Input
              type="password"
              placeholder="Password"
              iclassname="w-full rounded-lg border border-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-pink-400 
                         focus:border-pink-400 transition-all duration-300 
                         shadow-sm placeholder-gray-400"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <a href="#" className="text-pink-600 hover:underline">
              Forgot your password?
            </a>
            <a href="#" className="text-pink-600 hover:underline">
              Create account
            </a>
          </div>

          <Button
            name="SIGN IN"
            className="w-full mt-4 bg-pink-500 text-white font-semibold py-3 rounded-xl 
                       hover:bg-pink-600 transition-all duration-300 shadow-md"
          />
        </form>
      </div>
    </div>
  );
}

export default Signin;
