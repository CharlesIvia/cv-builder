import React from "react";

export default function Summary({ summaryInfo, handleSummaryInfo }) {
  return (
    <div>
      <div>
        <h1>Tell the employer abit about yourself</h1>
      </div>
      <form className="info summary-info">
        <div>
          <textarea
            typeof="text"
            name="summary"
            value={summaryInfo}
            onChange={handleSummaryInfo}
            placeholder="I am..."
          ></textarea>
        </div>
        <div className="btn-div">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}
