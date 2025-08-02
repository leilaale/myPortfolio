import React from "react";
import DOMPurify from "dompurify";
import "./cards.css";

import Carousel from "./gallery_Carousel";

const ProjectCard = ({
  cardTitle,
  teamSize,
  objective,
  resources,
  cardDescription,
  hashTags,
  gitLink,
  slides,
}) => {
  const sanitizedDescription = DOMPurify.sanitize(cardDescription);

  return (
    <div className="project_Card">
      <div className="projectCard_description">
        <div className="projectCard_titleDiv">
          <h4 className="projectCard_title"> {cardTitle} </h4>
        </div>
        <p>
          <span className="projectCard_span"> Objective: </span> {objective}
        </p>
        {teamSize > 1 && (
          <p>
            <span className="projectCard_span"> Team Size: </span> {teamSize}
          </p>
        )}
        {resources && resources.length > 0 && (
          <p>
            <span className="projectCard_span"> Resources: </span> {resources}
          </p>
        )}
        <p>
          <span className="projectCard_span"> Description: </span>{" "}
          <span
            className="projectCard_InnerDescription"
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          />{" "}
        </p>
        <a className="git_link" href={gitLink}>
          Check out the Code!
        </a>
        <p className="hashtags">{hashTags}</p>
      </div>
      <div className="projectCard_gallery">
        <Carousel slides={slides}></Carousel>
      </div>
    </div>
  );
};

export default ProjectCard;
