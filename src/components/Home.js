import React, { useState } from "react";
import Logo from "../images/resumebuilder-logo.svg";
import Awards from "./Awards";
import Education from "./Education";
import Experience from "./Experience";
import HeaderButton from "./HeaderButton";
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
      <div className="header-btns">
        <HeaderButton
          renderCompo={onPersonalInfoClick}
          buttonname="1. Personal Info"
        />
        <HeaderButton renderCompo={onSummaryClick} buttonname="2. Summary" />
        <HeaderButton renderCompo={onSkillsClick} buttonname="3. Skills" />
        <HeaderButton
          renderCompo={onExperienceClick}
          buttonname="4. Experience"
        />
        <HeaderButton
          renderCompo={onEducationClick}
          buttonname="5. Education"
        />
        <HeaderButton renderCompo={onAwardsClick} buttonname="6. Awards" />
      </div>

      {showPersonalInfo ? <PersonalInfo /> : null}
      {showSummary ? <Summary /> : null}
      {showSkills ? <Skills /> : null}
      {showExperience ? <Experience /> : null}
      {showEducation ? <Education /> : null}
      {showAwards ? <Awards /> : null}
    </div>
  );
}
