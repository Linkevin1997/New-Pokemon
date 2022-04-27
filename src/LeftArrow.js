import React from "react";

export default function LeftArrow({ gotoPrevPage }) {
  return (
    <div className="arrows">
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
    </div>
  );
}
