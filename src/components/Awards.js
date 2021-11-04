import React from "react";

export default function Awards() {
  return (
    <div>
      <div>
        <h1>What awards have you received?</h1>
      </div>
      <div>
        <form className="info awards-info">
          <div>
            <input type="text" placeholder="Award name"></input>
            <input type="text" placeholder="Why"></input>
            <input type="date" placeholder="Year"></input>
          </div>
          <div className="btn-div">
            <button>Add Award</button>
          </div>
        </form>
      </div>
    </div>
  );
}
