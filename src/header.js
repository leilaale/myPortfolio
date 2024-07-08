
import React, { useState } from 'react';

const Header = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <header>
            <ul>
                <li>
                    <a 
                        href="#home" 
                        className={activeTab === 'home' ? 'active' : ''}
                        onClick={() => handleTabClick('home')}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href="#about" 
                        className={activeTab === 'about' ? 'active' : ''}
                        onClick={() => handleTabClick('about')}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a 
                        href="#projects" 
                        className={activeTab === 'projects' ? 'active' : ''}
                        onClick={() => handleTabClick('projects')}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact-me" 
                        className={activeTab === 'contact-me' ? 'active' : ''}
                        onClick={() => handleTabClick('co-ntact-me')}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
