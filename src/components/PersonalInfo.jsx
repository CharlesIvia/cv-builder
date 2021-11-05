import React from "react";

export default function PersonalInfo({
  handlePersonalInfo,
  personalInfo,
  handlePersonalInfoSubmit,
}) {
  return (
    <div>
      <div>
        <h1>How can employers contact you?</h1>
      </div>
      <div>
        <form
          onSubmit={handlePersonalInfoSubmit}
          className="info personal-info"
        >
          <div>
            <input
              name="firstName"
              type="text"
              value={personalInfo.firstName}
              onChange={handlePersonalInfo}
              placeholder="First Name"
            ></input>
            <input
              type="text"
              name="lastName"
              value={personalInfo.lastName}
              onChange={handlePersonalInfo}
              placeholder="Last Name"
            ></input>
            <input
              type="text"
              name="profession"
              value={personalInfo.profession}
              onChange={handlePersonalInfo}
              placeholder="Profession"
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="street"
              value={personalInfo.street}
              onChange={handlePersonalInfo}
              placeholder="Street"
            ></input>
            <input
              type="text"
              name="city"
              value={personalInfo.city}
              onChange={handlePersonalInfo}
              placeholder="City"
            ></input>
            <input
              type="text"
              name="zipCode"
              value={personalInfo.zipCode}
              onChange={handlePersonalInfo}
              placeholder="Zip Code"
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={personalInfo.phone}
              onChange={handlePersonalInfo}
              placeholder="Phone"
            ></input>
            <input
              type="text"
              name="email"
              value={personalInfo.email}
              onChange={handlePersonalInfo}
              placeholder="Email"
            ></input>
            <input
              type="text"
              name="website"
              value={personalInfo.website}
              onChange={handlePersonalInfo}
              placeholder="Website"
            ></input>
          </div>
          <div className="btn-div">
            <button>Add Info</button>
          </div>
        </form>
      </div>
    </div>
  );
}
