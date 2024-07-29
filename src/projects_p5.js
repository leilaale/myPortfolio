import React from "react";
import ProjectCard from "./projects_Cards";

import awsImg2 from "./images/AWS/statemachines/Code for Transcription.png";
import awsImg1 from "./images/AWS/statemachines/s1.png";
import awsImg3 from "./images/AWS/statemachines/s2.png";
import awsImg4 from "./images/AWS/statemachines/s2Code.png";
import awsImg5 from "./images/AWS/statemachines/s3.png";


const Project5 = () => {



    return(


        <div class = "tab-projects" id="project5">
            <div class = "project-title">
                <h1> AWS Side Projects </h1>
            </div>
            <div class = "project-description pr-Des5">
                <ProjectCard 
                    cardTitle="AWS State-Machines & AI" 
                    teamSize="1" 
                    objective="Learned AWS State Machines and AWS Bedrock Services"
                    cardDescription={"LinkedIn Learning class where they showed how AWS state machines work and how to invoke Bedrock Services into those machines. I was interested in learning about AWS services and how I could use them in my own personal projects. This allowed to get a bit of depth into that area. Some parts of the tutorial code where not completely shown, but with the previous explanations I was able to find the solutions."} 
                    hashTags= "#AWS #AWSBedrock #StateMachines #AWSServices #AI #AIprompts #BackEnd"
                    slides={[
                        { image: awsImg1, title: 'Slide 1', description: "#1a Transcribe an .mp4 using AWS Transcribe Service"},
                        { image: awsImg2, title: 'Slide 2', description: "#1b ~Code~"},
                        { image: awsImg3, title: 'Slide 3', description: "#2a Translate transcription using AWS Transcription Service"},
                        { image: awsImg4, title: 'Slide 1', description: "hello"},
                        { image: awsImg5, title: 'Slide 1', description: "#3a Added a Parallel State to translate and create a poem"}
                        
                    ]} 
                />
                <ProjectCard 
                    cardTitle="AWS Weather Chatbot"
                    objective={"Learned how to use AWS Bedrock Knowledge Base, call on a API with json"} 
                    cardDescription={"I learned to create a Knowledge Base connected to a csv file that contained city names with their latitude and longitude. The API would bring the weather for the city that the user decided to look up."} 
                    slides={[
                        { image: awsImg1, title: 'Slide 1', description: "hello"},
                        { image: awsImg1, title: 'Slide 2', description: "image 2"},
                        { image: awsImg1, title: 'Slide 3', description: "image 3"},
                    ]}
                />
                <ProjectCard 
                    cardTitle="Project 3" 
                    cardDescription="loresm " 
                    slides= {[
                        { image: awsImg1, title: 'Slide 1', description: "hello"},
                        { image: awsImg1, title: 'Slide 2', description: "image 2"},
                        { image: awsImg1, title: 'Slide 3', description: "image 3"},
                    ]}
                />
            </div>
        </div>
    );
}

export default Project5;