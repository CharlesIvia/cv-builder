import React from "react";

export default function Skills() {
  return (
    <div>
      <div>
        <h1>What skills do you have?</h1>
      </div>
      <div>
        <form className="info skills-info">
          <div>
            <input type="text" placeholder="Add skill"></input>
          </div>
          <div className="btn-div">
            <button>Add Skill</button>
          </div>
        </form>
      </div>
    </div>
  );
}
