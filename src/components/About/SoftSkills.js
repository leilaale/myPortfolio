import React from "react";
import styles from "./About.module.css";

const SoftSkillsTab = () => {
  const softSkills = [
    "Leadership",
    "Team Player",
    "Communication",
    "Presentation Readiness",
    "Project Management",
    "Project Documentation",
    "Problem Solving",
    "Critical Thinking",
    "Adaptability",
    "Time Management",
    "Collaboration",
    "Continuous Learning",
    "Attention to Detail",
    "Empathy",
  ];

  return (
    <div className={styles.softSkills}>
      {softSkills.map((skill, index) => (
        <span className={styles.softSkillsTab} key={index}>
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SoftSkillsTab;
