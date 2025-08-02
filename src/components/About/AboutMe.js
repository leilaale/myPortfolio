import React, { useState } from "react";
import SkillsTab from "./Skills";
import SoftSkillsTab from "./SoftSkills";
import CertificationsTab from "./Certifications";
import EducationTab from "./Education";
import styles from "./About.module.css";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("skills"); // 'skills' is the default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="slide">
      <div className={styles.about} id="about">
        <div className={styles.aboutContainer}>
          <div className={styles.aboutRow}>
            <div className={styles.bio}>
              <h2 className={styles.sectionHeader}>About Me</h2>
              <p className={styles.bioP}>
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
              <div className={styles.tabTitles}>
                <p
                  className={`${styles.tabLinks} ${
                    activeTab === "skills" ? styles.activeLink : ""
                  }`}
                  onClick={() => handleTabClick("skills")}
                >
                  Skills
                </p>
                <p
                  className={`${styles.tabLinks} ${
                    activeTab === "softSkills" ? styles.activeLink : ""
                  }`}
                  onClick={() => handleTabClick("softSkills")}
                >
                  Soft Skills
                </p>
                <p
                  className={`${styles.tabLinks} ${
                    activeTab === "education" ? styles.activeLink : ""
                  }`}
                  onClick={() => handleTabClick("education")}
                >
                  Education
                </p>
                <p
                  className={`${styles.tabLinks} ${
                    activeTab === "certifications" ? styles.activeLink : ""
                  }`}
                  onClick={() => handleTabClick("certifications")}
                >
                  Certifications
                </p>
              </div>
              {/* Render the active tab based on activeTab state */}

              <div
                className={`${styles.tabContents} ${
                  activeTab === "skills" ? styles.activeTab : ""
                }`}
              >
                <SkillsTab></SkillsTab>
              </div>
              <div
                className={`${styles.tabContents} ${
                  activeTab === "softSkills" ? styles.activeTab : ""
                }`}
              >
                <SoftSkillsTab></SoftSkillsTab>
              </div>
              <div
                className={`${styles.tabContents} ${
                  activeTab === "education" ? styles.activeTab : ""
                }`}
              >
                <EducationTab></EducationTab>
              </div>
              <div
                className={`${styles.tabContents} ${
                  activeTab === "certifications" ? styles.activeTab : ""
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
