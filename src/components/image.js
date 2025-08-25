// image.jsx
import React from "react";

function IMG({ src, alt, imgClassname }) {
  return (
    <img
      src={src}
      alt={alt}
      className={imgClassname}
    />
  );
}

export default IMG;
