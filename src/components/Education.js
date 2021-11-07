import React from "react";

export default function Education({
  educationInfo,
  educationChange,
  value,
  learnedChange,
  learnedSubmit,
}) {
  return (
    <div>
      <div>
        <h1>What is your education background?</h1>
      </div>
      <div>
        <form className="info education-info">
          <div>
            <input
              type="text"
              name="school"
              value={educationInfo.school}
              onChange={educationChange}
              placeholder="Where"
            ></input>
            <input
              type="text"
              name="degree"
              value={educationInfo.degree}
              onChange={educationChange}
              placeholder="Type"
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="start"
              value={educationInfo.start}
              onChange={educationChange}
              placeholder="From"
            ></input>
            <input
              type="text"
              name="end"
              value={educationInfo.end}
              onChange={educationChange}
              placeholder="To"
            ></input>
          </div>

          <div className="btn-div">
            <button>Save</button>
          </div>
        </form>
        <form className="info" onSubmit={learnedSubmit}>
          <div>
            <div>
              <input
                type="text"
                value={value}
                onChange={learnedChange}
                placeholder="Learned"
              ></input>
            </div>
            <div className="btn-div">
              <button>Add Learned</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
