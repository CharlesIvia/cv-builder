import React from "react";

export default function School({ educationInfo, learned }) {
  return (
    <div>
      <div>
        <p>
          <span>{educationInfo.school || "MIT"}</span>
          <span> - </span>
          <span>{educationInfo.degree || "Computer Science"}</span>
        </p>
      </div>
      <div>
        <p>
          <span>{educationInfo.start || "August 2017"}</span>
          <span> - </span>
          <span>{educationInfo.end || "December 2020"}</span>
        </p>
      </div>
      <div>
        <ul>
          <li>Reading backwards</li>
          {learned.map((lrn) => (
            <li key={learned.indexOf(lrn)}>{lrn.learn}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
