import React from "react";

export default function Output({ personalInfo, summaryInfo, skills }) {
  return (
    <div className="output">
      <div className="info-section personal-section">
        <div>
          <h2>
            <span>{personalInfo.firstName || "John"} </span>
            <span>{personalInfo.lastName || "Doe"}</span>
          </h2>
        </div>

        <div>
          <h3>{personalInfo.profession || "Web Developer | Data Analyst"}</h3>
        </div>

        <div>
          <p>
            <span>
              {personalInfo.street || "Drumvale Road"}
              {", "}
            </span>
            <span>{personalInfo.city || "New York"} </span>
            <span>{personalInfo.zipCode || "00100"} </span>
          </p>
        </div>
        <div>
          <p>{personalInfo.phone || "+123 74 568 640"}</p>
        </div>

        <div className="email">
          <p>{personalInfo.email || "johndoe@email.com"}</p>
        </div>
        <div className="website">
          <p>{personalInfo.website || "https://johndoe.com"}</p>
        </div>
      </div>
      <div className="info-section skills-section">
        <div>
          <h2>Summary</h2>
        </div>
        <div>
          <p>
            {summaryInfo ||
              "I am a versatile and curious individual with experience collecting,transforming, organizing and analyzing data to help make informed decisions. I also possess excellent understanding and proficiency of platforms for effective data analysis, including, SQL, Python, R,spreadsheets and Tableau."}
          </p>
        </div>
      </div>
      <div className="info-section skills-section">
        <div>
          <h2>Skills</h2>
        </div>
        <ul>
          <li className="skillexample">Walking like a crab</li>
          {skills.map((skill) => (
            <li key={skills.indexOf(skill)}>{skill.skillname}</li>
          ))}
        </ul>
      </div>
      <div className="info-section experience-section">
        <div>
          <h2>Experience</h2>
        </div>
        <div>
          <p>
            <span>Facebook,</span>
            <span>Menlo Park</span>
            <span></span>
          </p>
        </div>
        <div>
          <p>
            <span>August 2020</span>
            <span>Today</span>
          </p>
        </div>
        <div>
          <ul>
            <li>Designed intuitive questionnaires for collecting data.</li>
            <li>Designed intuitive questionnaires for collecting data.</li>
            <li>Designed intuitive questionnaires for collecting data.</li>
          </ul>
        </div>
      </div>
      <div className="info-section education-section">
        <div>
          <h2>Education</h2>
        </div>
        <div>
          <p>
            <span>MIT,</span>
            <span>Computer Science</span>
          </p>
        </div>
        <div>
          <p>
            <span>August 2017</span>
            <span>December 2020</span>
          </p>
        </div>
        <div>
          <ul>
            <li>Designed intuitive questionnaires for collecting data.</li>
            <li>Designed intuitive questionnaires for collecting data.</li>
            <li>Designed intuitive questionnaires for collecting data.</li>
          </ul>
        </div>
      </div>

      <div className="info-section awards-section">
        <div>
          <h2>Awards</h2>
        </div>
        <div>
          <p>
            <span>Devpost Covid-19 Global Hackathon Winner</span>
            <span>2020</span>
          </p>
        </div>
      </div>
    </div>
  );
}
