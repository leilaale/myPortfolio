import React, { useState } from "react";
import SkillsTab from "./about_Skills";
import SoftSkillsTab from "./about_SoftSkills";
import EducationTab from "./about_Education";
import CertificationsTab from "./about_Certification";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("skills"); // 'skills' is the default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="slide">
      <div className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="bio">
              <h2 className="section-header">About Me</h2>
              <p className="bio-p">
                I recently earned my Master’s in Software Engineering from the
                University of Texas at El Paso (UTEP), graduating in May 2024. I
                began this journey in January 2022, completing prerequisites and
                diving deep into development, design, and full-stack
                technologies. Since then, I’ve built a range of web and mobile
                applications that reflect my passion for problem-solving and
                creating tools that help people.
                <br />
                <br />
                Now, I’m excited to take the next step—bringing those skills to
                a team where I can contribute, learn, and grow as a developer.
              </p>
              <div className="tab-titles">
                <p
                  className={`tab-links ${
                    activeTab === "skills" ? "active-link" : ""
                  }`}
                  onClick={() => handleTabClick("skills")}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "softSkills" ? "active-link" : ""
                  }`}
                  onClick={() => handleTabClick("softSkills")}
                >
                  Soft Skills
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "education" ? "active-link" : ""
                  }`}
                  onClick={() => handleTabClick("education")}
                >
                  Education
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "certifications" ? "active-link" : ""
                  }`}
                  onClick={() => handleTabClick("certifications")}
                >
                  Certifications
                </p>
              </div>
              {/* Render the active tab based on activeTab state */}

              <div
                className={`tab-contents ${
                  activeTab === "skills" ? "active-tab" : ""
                }`}
              >
                <SkillsTab></SkillsTab>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "softSkills" ? "active-tab" : ""
                }`}
              >
                <SoftSkillsTab></SoftSkillsTab>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "education" ? "active-tab" : ""
                }`}
              >
                <EducationTab></EducationTab>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "certifications" ? "active-tab" : ""
                }`}
              >
                <CertificationsTab></CertificationsTab>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
