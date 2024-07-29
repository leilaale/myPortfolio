import React from "react"; 
import "./cards.css";

import Carousel from "./gallery_Carousel";

const ProjectCard = ({
    cardTitle,
    teamSize,
    objective,
    cardDescription,
    hashTags,
    slides,
}) => {

    return (
        <div className="project_Card">
            <div className="projectCard_description">
                <div className="projectCard_titleDiv"> 
                    <h4 className="projectCard_title"> {cardTitle} </h4>
                </div>
                <p><span className="projectCard_span"> Objective:  </span> {objective}</p>    
                <p><span className="projectCard_span"> Team Size: </span> {teamSize}</p>
                <p><span className="projectCard_span"> Description: </span> {cardDescription} </p>
                <p className="hashtags">{hashTags}</p>
            </div>
            <div className="projectCard_gallery">
                <Carousel slides={slides}></Carousel>
            </div>
        </div>
    );
}

export default ProjectCard;