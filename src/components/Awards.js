import React from "react";

export default function Awards() {
  return (
    <div>
      <div>
        <h1>What awards have you received?</h1>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Award name"></input>
          <input type="text" placeholder="Why"></input>
          <input type="text" placeholder="Year"></input>
          <button>Add Award</button>
        </form>
      </div>
    </div>
  );
}
