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
  const [skills, setSkills] = useState({
    skillname: "",
    skilllist: [],
  });

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

  //Summary

  //Skills

  let handleSkillsChange = (e) => {
    setSkills({
      skillname: e.target.value,
    });
  };

  let onSkillsSubmit = (e) => {
    e.preventDefault();
    if (skills.skillname !== "") {
      setSkills({
        skilllist: [...skills.skillname],
        skillname: "",
      });
    } else {
      alert("Please add a skill");
    }
  };

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
                skillsInfo={skills}
                handleSkillInfo={handleSkillsChange}
                handleSkillInfoSubmit={onSkillsSubmit}
              />
            ) : null}
            {showExperience ? <Experience /> : null}
            {showEducation ? <Education /> : null}
            {showAwards ? <Awards /> : null}
          </div>
        </div>
        <div>
          <Output
            personalInfo={personalInformation}
            summaryInfo={summaryInfo}
            skillsInfo={skills}
          />
        </div>
      </div>
    </div>
  );
}
