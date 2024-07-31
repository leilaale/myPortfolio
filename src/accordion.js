import React, { useState } from 'react';
import ProjectCard from './projects_Cards';


const Accordion = ({ subject, projects }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <h2 onClick={toggleAccordion} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            {subject}
            <span style={{ marginLeft: 'auto', transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                ▼
            </span>
            </h2>
            {isOpen && (
            <div className="accordion-content">
                {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    cardTitle={project.cardTitle}
                    teamSize={project.teamSize}
                    objective={project.objective}
                    resources={project.resources}
                    cardDescription={project.cardDescription}
                    hashTags={project.hashTags}
                    gitLink={project.gitLink}
                    slides={project.slides}
                />
                ))}
            </div>
            )}
        </div>
    );
};

export default Accordion;
