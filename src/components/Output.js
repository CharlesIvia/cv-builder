import React from "react";

export default function Output() {
  return (
    <div className="output">
      <div className="info-section personal-section">
        <div>
          <h2>John Doe</h2>
        </div>

        <div>
          <h3>Web Developer | Data Analyst</h3>
        </div>

        <div>
          <p>
            <span>Drumvale Road,</span>
            <span>New York</span>
            <span>00100</span>
          </p>
        </div>
        <div>
          <p>+123 74 568 640</p>
        </div>

        <div className="email">
          <p>johndoe@email.com</p>
        </div>
        <div className="website">
          <p>https://johndoe.com</p>
        </div>
      </div>
      <div className="info-section skills-section">
        <div>
          <h2>Summary</h2>
        </div>
        <div>
          <p>
            I am a versatile and curious individual with experience collecting,
            transforming, organizing and analyzing data to help make informed
            decisions. I also possess excellent understanding and proficiency of
            platforms for effective data analysis, including, SQL, Python, R,
            spreadsheets and Tableau.
          </p>
        </div>
      </div>
      <div className="info-section skills-section">
        <div>
          <h2>Skills</h2>
        </div>
        <ul>
          <li>Frontend web development and firebase</li>
          <li>
            Proficiency with JS, python, spreadsheets, SQL, R, Tableau, HTML,
            CSS
          </li>
          <li>Strong data analysis and visualization skills</li>
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
