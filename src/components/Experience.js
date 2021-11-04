import React from "react";

export default function Experience() {
  return (
    <div>
      <div>
        <h1>Tell employers what experience you possess</h1>
      </div>
      <div>
        <form className="info experience-info">
          <div>
            <input type="text" placeholder="Company"></input>
            <input type="text" placeholder="Position"></input>
            <input type="text" placeholder="Roles"></input>
          </div>
          <div>
            <input type="date" placeholder="From"></input>
            <input type="date" placeholder="To"></input>
          </div>
          <div className="btn-div">
            <button>Add Exp</button>
          </div>
        </form>
      </div>
    </div>
  );
}
