import React from "react";

export default function RightArrow({ gotoNextPage }) {
  return (
    <div className="arrows">
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
}
