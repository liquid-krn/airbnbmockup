import React from "react";

const credd = [
  "LABORATORY",
  "OUR VALUES",
  "OUR COMMITMENTS",
  "OUR EXPERTISE",
  "OUR AMBASSADORS",
  "Q&A",
];

function Cred() {
  return (
    <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] mx-auto mt-10 bg-gray-100 p-8 rounded-lg shadow-sm">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Topicrem</h2>
        <p className="text-gray-700">
          NIGY Laboratories, 3 Place Louis Renault, 92500 RUEIL-MALMAISON
        </p>
        <p className="text-gray-700">(+33) 1 77 93 72 08</p>
        <p className="text-gray-700">
          Recruitment:{" "}
          <a
            href="https://mayoly-spindler.softy.pro/offers"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View open positions
          </a>
        </p>
      </div>

      <div className="grid gap-2 text-gray-700">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">About Us</h3>
        {credd.map((item, index) => (
          <div
            key={index}
            className="hover:text-blue-400 cursor-pointer transition-colors"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cred;
