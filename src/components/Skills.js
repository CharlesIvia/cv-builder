import React from "react";

export default function Skills({ value, skillChange, skillSubmit }) {
  return (
    <div>
      <div>
        <h1>What skills do you have?</h1>
      </div>
      <div>
        <form onSubmit={skillSubmit} className="info skills-info">
          <div>
            <input
              value={value}
              onChange={skillChange}
              type="text"
              placeholder="Add skill"
            ></input>
          </div>
          <div className="btn-div">
            <button>Add Skill</button>
          </div>
        </form>
      </div>
    </div>
  );
}
