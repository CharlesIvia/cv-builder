import React from "react";

export default function Experience({
  experienceInfo,
  experienceChange,
  value,
  roleChange,
  roleSubmit,
}) {
  return (
    <div>
      <div>
        <h1>Tell employers what experience you possess</h1>
      </div>
      <div>
        <form className="info experience-info">
          <div>
            <input
              type="text"
              name="place"
              value={experienceInfo.place}
              onChange={experienceChange}
              placeholder="Company"
            ></input>
            <input
              type="text"
              name="position"
              value={experienceInfo.position}
              onChange={experienceChange}
              placeholder="Position"
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="start"
              value={experienceInfo.start}
              onChange={experienceChange}
              placeholder="From (2010)"
            ></input>
            <input
              type="text"
              name="end"
              value={experienceInfo.end}
              onChange={experienceChange}
              placeholder="To (2020)"
            ></input>
          </div>
          <div className="btn-div">
            <button>Add Exp</button>
          </div>
        </form>
        <form className="info" onSubmit={roleSubmit}>
          <div>
            <div>
              <input
                type="text"
                value={value}
                onChange={roleChange}
                placeholder="Roles"
              ></input>
            </div>
            <div className="btn-div">
              <button>Add Role</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
