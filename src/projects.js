import React, { useState } from 'react';
import Project1 from './projects_p1';
import Project2 from './projects_p2';
import Project3 from './projects_p3';
import Project4 from './projects_p4';
import Project5 from './projects_p5';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('project1'); // Default active tab

    const handleTabClick = (event, tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="projects" id="projects">
            <h1> Projects </h1>
            <div className="projects-row">
                <div className="wrapper_Project">
                    <div className="container_Project">
                        <input className='projects_input' style={{display: 'none'}} type="radio" name="slide" id="c1" checked={activeTab === 'project1'} />
                        <label htmlFor="c1" className={`card_Project ${activeTab === 'project1' ? 'active-p-link' : ''}`} onClick={(e) => handleTabClick(e, 'project1')}>
                            <div className="card_Row">
                                <div className="card_Icon">1</div>
                                <div className="card_Info">
                                    <h4>Build-A-Car</h4>
                                    <p>Cross-Platform programming with Flutter</p>
                                </div>
                            </div>
                            <div className="card_tab">
                                <h1 className="card_title">Build-A-Car</h1>
                            </div>
                        </label>
                        {/* Repeat similar structure for other input and label pairs */}
                        <input className='projects_input' style={{display: 'none'}} type="radio" name="slide" id="c2" checked={activeTab === 'project2'} />
                        <label htmlFor="c2" className={`card_Project ${activeTab === 'project2' ? 'active-p-link' : ''}`} onClick={(e) => handleTabClick(e, 'project2')}>
                            <div className="card_Row">
                                <div className="card_Icon">2</div>
                                <div className="card_Info">
                                    <h4>El Paso Tourism Database</h4>
                                </div>
                            </div>
                        </label>
                        <input className='projects_input' style={{display: 'none'}} type="radio" name="slide" id="c3" checked={activeTab === 'project3'} />
                        <label htmlFor="c3" className={`card_Project ${activeTab === 'project3' ? 'active-p-link' : ''}`} onClick={(e) => handleTabClick(e, 'project3')}>
                                    <div class="card_Row">
                                        <div class="card_Icon">3</div>
                                        <div class="card_Info">
                                            <h4>UTEP Practicum</h4>
                                            <p></p>
                                        </div>
                                    </div>
                        </label>
                        <input className='projects_input' style={{display: 'none'}} type="radio" name="slide" id="c4" checked={activeTab === 'project4'} />
                        <label htmlFor="c4" className={`card_Project ${activeTab === 'project4' ? 'active-p-link' : ''}`} onClick={(e) => handleTabClick(e, 'project4')}>
                                    <div class="card_Row">
                                        <div class="card_Icon">4</div>
                                        <div class="card_Info">
                                            <h4>Paydirt's Gotta Pay Tuition</h4>
                                        </div>
                                    </div>
                        </label>
                        <input className='projects_input' style={{display: 'none'}} type="radio" name="slide" id="c5" checked={activeTab === 'project5'} />
                        <label htmlFor="c5" className={`card_Project ${activeTab === 'project5' ? 'active-p-link' : ''}`} onClick={(e) => handleTabClick(e, 'project5')}>
                                    <div class="card_Row">
                                        <div class="card_Icon">5</div>
                                        <div class="card_Info">
                                            <h4>Mini Projects</h4>
                                        </div>
                                    </div>
                        </label>
                    </div>
                </div> 
            </div>
            <div className='project-content'>
                {activeTab === 'project1' && <Project1 />}
                {activeTab === 'project2' && <Project2 />}
                {activeTab === 'project3' && <Project3 />}
                {activeTab === 'project4' && <Project4 />}
                {activeTab === 'project5' && <Project5 />}    
            </div>                    
        </div>
    );
};

export default Projects;