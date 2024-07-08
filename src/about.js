import React, { useState } from 'react';
import SkillsTab from './about_Skills';
import SoftSkillsTab from './about_SoftSkills';
import EducationTab from './about_Education';
import CertificationsTab from './about_Certification';


const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('skills'); // 'skills' is the default active tab

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="slide">
        <div className="about" id="about">
            <div className="container">
            <div className="row">
                <div className="bio">
                <h2>About Me</h2>
                <p>
                    Currently a Master's student for Software Engineering at UTEP
                    (University of Texas at El Paso). Started my journey in Jan.
                    2022 with pre-requisites for the master's and have maintained
                    motivated and excited for this career.
                </p>
                <div className="tab-titles">
                    <p
                    className={`tab-links ${
                        activeTab === 'skills' ? 'active-link' : ''
                    }`}
                    onClick={() => handleTabClick('skills')}
                    >
                    Skills
                    </p>
                    <p
                    className={`tab-links ${
                        activeTab === 'softSkills' ? 'active-link' : ''
                    }`}
                    onClick={() => handleTabClick('softSkills')}
                    >
                    Soft Skills
                    </p>
                    <p
                    className={`tab-links ${
                        activeTab === 'education' ? 'active-link' : ''
                    }`}
                    onClick={() => handleTabClick('education')}
                    >
                    Education
                    </p>
                    <p
                    className={`tab-links ${
                        activeTab === 'certifications' ? 'active-link' : ''
                    }`}
                    onClick={() => handleTabClick('certifications')}
                    >
                    Certifications
                    </p>
                </div>
                {/* Render the active tab based on activeTab state */}
                
                    <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`}><SkillsTab></SkillsTab></div>
                    <div className={`tab-contents ${activeTab === 'softSkills' ? 'active-tab' : ''}`}><SoftSkillsTab></SoftSkillsTab></div>
                    <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`}><EducationTab></EducationTab></div>
                    <div className={`tab-contents ${activeTab === 'certifications' ? 'active-tab' : ''}`}><CertificationsTab></CertificationsTab></div>

                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;
