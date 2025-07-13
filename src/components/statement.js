import React from "react";
import Button from "./button";
import IMG from "./image";

function Statement() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto mt-10 bg-gray-100 rounded-lg shadow-md p-6 items-center">
      <div className="px-4">
        <h1 className="font-semibold text-4xl leading-tight text-gray-800">
          <span className="text-gray-600">A gesture for</span> <br />
          the <br />
          environment
        </h1>

        <div className="mt-5 text-sm space-y-4 text-gray-700">
          <p>
            <strong>TOPICREM SUN PROTECT</strong> is committed to reducing its impact on the
            environment through eco-designed packaging*.
          </p>

          <p>
            The brand is also committed to donating 1% of the sales of its SUN
            PROTECT range products labeled{" "}
            <span className="underline font-medium">"1% for the Planet"</span> to an
            international network of associations dedicated to its protection.
          </p>

          <p>
            We have chosen to support{" "}
            <span className="underline font-medium">Project Rescue Ocean</span>, a committed
            organization that carries out concrete clean-up actions and raises
            awareness among younger generations about environmental issues.
          </p>
        </div>

        <Button
          name="LEARN MORE*"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full"
        />
      </div>

      <div className="flex justify-center items-center">
        <IMG
          src="/image/env.jpg"
          alt="Environment"
          imgClassname="w-full max-h-[400px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default Statement;
