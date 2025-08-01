import React from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaMobileAlt,
  FaGlobe,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiRedux,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

const SkillsTab = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "NoSQL", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "REST APIs", icon: <FaGlobe /> },
    { name: "Responsive Design", icon: <FaMobileAlt /> },
    { name: "Figma / UX", icon: <SiFigma /> },
  ];

  return (
    <div className="skills-list">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <div className="icon">{skill.icon}</div>
          <h5>{skill.name}</h5>
        </div>
      ))}
    </div>
  );
};

export default SkillsTab;
