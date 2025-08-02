import React from "react";
import peteDemo from "../../images/pete/peteGame.mp4";

const Project4 = () => {
  return (
    <div class="tab-projects" id="project4">
      <div class="project-title">
        <h1>Paydirt's Gotta Pay Tuition</h1>
      </div>
      <div class="project-description pr-Des4">
        <div class="description_2">
          <p>
            <span id="project-subtitle">Class: </span> Software Construction{" "}
          </p>
          <p>
            <span>Skills Learned:</span> Unity, C#, Object-Oriented Programming,
            Unit Testing, TSP, Inkscape{" "}
          </p>
          <p>
            <span>Soft Skills:</span> Team work, Presentation Skills,
            Problem-Solving, Time Management, Communication, Project
            Documentation
          </p>
          <p>
            <span>Team size:</span> 7
          </p>
          <p>
            <span>Description: </span>
            <br />
            <br />
            We had to learn software techniques to make our project life-cycle
            easier. We needed to implement coding standards such as having high
            cohesion and low coupling, as well as code refactoring and unit
            testing. Due to the fact that we had a lot of members in our team, I
            was only able to undertake a small part.
            <br />
            <br />
            <span id="sub-title-pr4">Game Description: </span>
            A 2D-Game created on Unity Platform with an environment like El
            Paso's. It is inspired by the “Endless Run” game theme where the
            speed is increased the more you survive.
            <br />
            <br />
            <span id="sub-title-pr4">Features: </span>
            Difficult increase, Jump(2x), Move back and forth, Pick up objects,
            Throw pickaxe to eliminate enemies, Receive Damage, Background has
            movement, Recover Health, Obstacles (Rocks, Bees, Cacti)
            <br />
            <br />
            <span id="sub-title-pr4">What I did: </span>I was in charged of
            making the floor move as increase speed as the player passed on to
            the next level. I also design an enemy made as a bee that the player
            had to avoid completely or kill.
          </p>
        </div>
        <p>
          <span id="gallery-title">DEMO</span>
        </p>
        <video width="640" height="360" controls>
          <source src={peteDemo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Project4;
