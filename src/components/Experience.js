import React from "react";

export default function Experience() {
  return (
    <div>
      <div>
        <h1>Tell employers what experience you possess</h1>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Company"></input>
          <input type="text" placeholder="Position"></input>
          <input type="text" placeholder="Roles"></input>
          <div>
            <input type="date" placeholder="From"></input>
            <input type="date" placeholder="To"></input>
          </div>
          <button>Add Exp</button>
        </form>
      </div>
    </div>
  );
}
