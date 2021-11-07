import React, { useState } from "react";
import Logo from "../images/resumebuilder-logo.svg";
import Awards from "./Awards";
import Education from "./Education";
import Experience from "./Experience";
import HeaderButton from "./HeaderButton";
import Output from "./Output";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Summary from "./Summary";

export default function Home() {
  const [showPersonalInfo, setPersonalInfo] = useState(false);
  const [showSummary, setSummary] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showExperience, setShowExperince] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showAwards, setShowAwards] = useState(false);
  const [personalInformation, setPersonalInformation] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    city: "",
    street: "",
    zipCode: "",
    phone: "",
    email: "",
    website: "",
  });

  const [summaryInfo, setSummaryInfo] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillvalue, setSkillValue] = useState("");
  const [experienceInfo, setExperienceInfo] = useState({
    place: "",
    position: "",
    start: "",
    end: "",
  });

  const [roles, setRoles] = useState([]);
  const [rolevalue, setRoleValue] = useState("");

  const [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    start: "",
    end: "",
  });

  const [learned, setLeanred] = useState([]);
  const [learnedvalue, setLearnedValue] = useState("");

  //General logic
  let handleAllInformationChange = (e) => {
    let value = e.target.value;
    setPersonalInformation({
      ...personalInformation,
      [e.target.name]: value,
    });

    setSummaryInfo(value);
  };

  //Personal Infomation
  let onPersonalInformationSubmit = (e) => {
    e.preventDefault();
    setPersonalInfo(false);
    setSummary(true);
  };

  //Skills

  let addSkill = (skillname) => {
    let newSkill = [...skills, { skillname }];
    setSkills(newSkill);
  };

  let onSkillChange = (e) => {
    setSkillValue(e.target.value);
  };

  let onSkillSubmit = (e) => {
    e.preventDefault();
    if (!skillvalue) return;
    addSkill(skillvalue);
    console.log(skills);
    setSkillValue("");
  };

  //Experience

  let addRole = (rolename) => {
    let newRole = [...roles, { rolename }];
    setRoles(newRole);
  };

  let onRoleChange = (e) => {
    setRoleValue(e.target.value);
  };

  let onRoleSubmit = (e) => {
    e.preventDefault();
    if (!rolevalue) return;
    addRole(rolevalue);
    setRoleValue("");
  };

  let handleExperienceChange = (e) => {
    let value = e.target.value;
    setExperienceInfo({
      ...experienceInfo,
      [e.target.name]: value,
    });
  };

  //Education
  let addLearned = (learn) => {
    let newLearned = [...learned, { learn }];
    setLeanred(newLearned);
  };

  let onLearnedChange = (e) => {
    setLearnedValue(e.target.value);
  };

  let onLearnedSubmit = (e) => {
    e.preventDefault();
    if (!learnedvalue) return;
    addLearned(learnedvalue);
    setLearnedValue("");
  };

  let handleEducationChange = (e) => {
    let value = e.target.value;
    setEducationInfo({
      ...educationInfo,
      [e.target.name]: value,
    });
  };

  //Tabs
  let onPersonalInfoClick = () => {
    setPersonalInfo(!showPersonalInfo);
    setSummary(false);
    setShowSkills(false);
    setShowExperince(false);
    setShowEducation(false);
    setShowAwards(false);
  };

  let onSummaryClick = () => {
    setSummary(!showSummary);
    setPersonalInfo(false);
    setShowSkills(false);
    setShowExperince(false);
    setShowEducation(false);
    setShowAwards(false);
  };

  let onSkillsClick = () => {
    setShowSkills(!showSkills);
    setPersonalInfo(false);
    setSummary(false);
    setShowExperince(false);
    setShowEducation(false);
    setShowAwards(false);
  };

  let onExperienceClick = () => {
    setShowExperince(!showExperience);
    setPersonalInfo(false);
    setShowSkills(false);
    setSummary(false);
    setShowEducation(false);
    setShowAwards(false);
  };

  let onEducationClick = () => {
    setShowEducation(!showEducation);
    setPersonalInfo(false);
    setSummary(false);
    setShowSkills(false);
    setShowExperince(false);
    setShowAwards(false);
  };

  let onAwardsClick = () => {
    setShowAwards(!showAwards);
    setPersonalInfo(false);
    setSummary(false);
    setShowSkills(false);
    setShowExperince(false);
    setShowEducation(false);
  };
  return (
    <div>
      <header className="header">
        <img src={Logo} alt="logo"></img>
        <p>Dashboard</p>
      </header>
      <div className="main">
        <div className="home">
          <div className="left">
            <div className="header-btns">
              <HeaderButton
                renderCompo={onPersonalInfoClick}
                buttonname="1. Personal Info"
              />
              <HeaderButton
                renderCompo={onSummaryClick}
                buttonname="2. Summary"
              />
              <HeaderButton
                renderCompo={onSkillsClick}
                buttonname="3. Skills"
              />
              <HeaderButton
                renderCompo={onExperienceClick}
                buttonname="4. Experience"
              />
              <HeaderButton
                renderCompo={onEducationClick}
                buttonname="5. Education"
              />
              <HeaderButton
                renderCompo={onAwardsClick}
                buttonname="6. Awards"
              />
            </div>

            {showPersonalInfo ? (
              <PersonalInfo
                personalInfo={personalInformation}
                handlePersonalInfo={handleAllInformationChange}
                handlePersonalInfoSubmit={onPersonalInformationSubmit}
              />
            ) : null}
            {showSummary ? (
              <Summary
                summaryInfo={summaryInfo}
                handleSummaryInfo={handleAllInformationChange}
              />
            ) : null}
            {showSkills ? (
              <Skills
                value={skillvalue}
                skillChange={onSkillChange}
                skillSubmit={onSkillSubmit}
              />
            ) : null}
            {showExperience ? (
              <Experience
                experienceInfo={experienceInfo}
                experienceChange={handleExperienceChange}
                value={rolevalue}
                roleChange={onRoleChange}
                roleSubmit={onRoleSubmit}
              />
            ) : null}
            {showEducation ? (
              <Education
                educationInfo={educationInfo}
                educationChange={handleEducationChange}
                value={learnedvalue}
                learnedChange={onLearnedChange}
                learnedSubmit={onLearnedSubmit}
              />
            ) : null}
            {showAwards ? <Awards /> : null}
          </div>
        </div>
        <div>
          <Output
            personalInfo={personalInformation}
            summaryInfo={summaryInfo}
            skills={skills}
            experienceInfo={experienceInfo}
            roles={roles}
            educationInfo={educationInfo}
            learned={learned}
          />
        </div>
      </div>
    </div>
  );
}
