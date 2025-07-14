// image.jsx
import React from "react";

function IMG({ src, alt, imgClassname }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${imgClassname} w-full h-full object-cover`}
    />
  );
}

export default IMG;
