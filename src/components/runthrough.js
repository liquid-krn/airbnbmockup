import React from "react";
import Marquee from "react-fast-marquee";

const runtext = [
  "FOR ALL SENSITIVE SKINS",
  "MADE IN FRANCE",
  "SINCE 1993",
  "PARIS DERMATOLOGICAL LABORATORY"
];

function Runthrough() {
  return (
    <div className="bg-gray-200 h-12 flex items-center">
      <Marquee speed={50}>
        {runtext.map((item, index) => (
          <span
            key={index}
            style={{ marginRight: "4rem", fontFamily: "sans", fontSize: "0.875rem", textTransform: "uppercase", color: "#374151" }}
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export default Runthrough;
