import React from "react";

export default function Work({ place, position, start, end, roles }) {
  return (
    <div>
      <div>
        <p>
          <span>{place || "Facebook, Menlo Park"} </span>
          <span> - </span>
          <span>{position || "Crab Trainer"}</span>
        </p>
      </div>
      <div>
        <p>
          <span>{start || "August 2020"}</span>
          <span> - </span>
          <span>{end || "Today"}</span>
        </p>
      </div>
      <div>
        <ul>
          <li>Extreme pen spinning</li>
          {roles.map((role) => (
            <li key={roles.indexOf(role)}>{role.rolename}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
