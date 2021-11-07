import React from "react";

export default function Awards({ awardsSubmit, value, awardsChange }) {
  return (
    <div>
      <div>
        <h1>What awards have you received?</h1>
      </div>
      <div>
        <form onSubmit={awardsSubmit} className="info awards-info">
          <div>
            <input
              type="text"
              value={value}
              onChange={awardsChange}
              placeholder="Award"
            ></input>
          </div>
          <div className="btn-div">
            <button>Add Award</button>
          </div>
        </form>
      </div>
    </div>
  );
}
