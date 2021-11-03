import React from "react";

export default function Education() {
  return (
    <div>
      <div>
        <h1>What is your education background?</h1>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Where"></input>
          <input type="text" placeholder="Type"></input>
          <input type="text" placeholder="Learned"></input>
          <input type="date" placeholder="From"></input>
          <input type="date" placeholder="To"></input>
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}
