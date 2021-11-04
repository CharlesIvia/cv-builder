import React from "react";

export default function s() {
  return (
    <div>
      <div>
        <h1>How can employers contact you?</h1>
      </div>
      <div>
        <form className="info personal-info">
          <div>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="text" placeholder="Profession"></input>
          </div>
          <div>
            <input placeholder="City"></input>
            <input placeholder="Street"></input>
            <input placeholder="Zip Code"></input>
          </div>
          <div>
            <input type="text" placeholder="Phone"></input>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Website"></input>
          </div>
          <div className="btn-div">
            <button>Add Info</button>
          </div>
        </form>
      </div>
    </div>
  );
}
