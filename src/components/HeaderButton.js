import React from "react";

export default function HeaderButton({ renderCompo, buttonname }) {
  return (
    <div>
      <button onClick={renderCompo} className="header-btn">
        {buttonname}
      </button>
    </div>
  );
}
