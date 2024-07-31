import React from "react";
import Accordion from "./accordion";

import awsImg2 from "./images/AWS/statemachines/Code for Transcription.png";
import awsImg1 from "./images/AWS/statemachines/s1.png";
import awsImg3 from "./images/AWS/statemachines/s2.png";
import awsImg4 from "./images/AWS/statemachines/s3.png";
import awsImg5 from "./images/AWS/weatherChatBot/weatherEP_today.png";
import awsImg6 from "./images/AWS/weatherChatBot/weatherEP_5days.png";
import awsImg7 from "./images/AWS/weatherChatBot/weatherDenver_today.png";
import awsImg8 from "./images/AWS/weatherChatBot/weatherDenver_5days.png";


const projectsData = [
    {
        subject: 'Amazon Web Services (AWS)',
        projects: [
            {
                cardTitle: "AWS State-Machines & AI", 
                teamSize: 1, 
                objective:"Learn AWS State Machines and AWS Bedrock Services",
                resources:"LinkedIn Course, AWS Services",
                cardDescription:"Created AWS State Machines to invoke transcription, translation, and Bedrock AI services. The first attempt was to create a state machine that would get an mp4 file, get the transcription of that video, and then save it into an S3 bucket. Another state machine was added to get the transcribed file and translate the text into another language. (In my case I used spanish so I could verify it translated correctly). That file was saved in the S3 Bucket. For the third an final step, I used a parallel state machine where the two routes where to translate and the other one to call on Bedrock AI to create a poem based on the transcript file. ",
                hashTags: "#AWS #AWSBedrock #StateMachines #AWSServices #AI #AIprompts #BackEnd",
                gitLink:"https://github.com/leilaale/awsLearning/tree/master/statemachine",
                slides:[
                        { image: awsImg1, title: 'Slide 1', description: "#1a Transcribe an .mp4 using AWS Transcribe Service"},
                        { image: awsImg2, title: 'Slide 2', description: "#1b ~Code~"},
                        { image: awsImg3, title: 'Slide 3', description: "#2a Translate transcription using AWS Transcription Service"},
                        { image: awsImg4, title: 'Slide 4', description: "#3a Added a Parallel State to translate and create a poem"}
                        
                ] 
            },
            {
                cardTitle:"AWS Weather Chatbot",
                teamSize:1,
                objective:"Learn how to make a weather chatbot with AWS Bedrock Knowledge Base, Agents, and Claude using an API",
                resources:"LinkedIn Course, AWS Services",
                cardDescription:"Created a Knowledge Base connected to a csv file that contained city names with their latitude and longitude. The file was saved in an S3 Bucket, with the openAI file. The API would get back with the weather for the city that the user decided to look up. They would be able to look up today's weather or a forecast of 5 days. ",
                hashTags:"#AWS #AWSBedrock #S3Bucket #Claude #BedrockAgent #BackEnd #JSON #Javascript #YML #KnowledgeBase",
                gitLink:"https://github.com/leilaale/awsLearning/tree/master/weatherChatbot",
                slides:[
                        { image: awsImg5, title: 'Slide 1', description: "1. Results for today's weather for El Paso, TX"},
                        { image: awsImg6, title: 'Slide 2', description: "2. Results for a 5 days' forecast for El Paso, TX"},
                        { image: awsImg7, title: 'Slide 3', description: "3. Results for today's weather for Denver, Colorado"},
                        { image: awsImg8, title: 'Slide 4', description: "4. Results for a 5 days' forecast for Denver, colorado"}
                ]
            }
        // Add more projects here
        ],
    },
    {
        subject: "Flutter",
        projects: [
            
        ]
    }
    // Add more subjects with projects here
];




const Project5 = () => {



    return(


        <div class = "tab-projects" id="project5">
            <div class = "project-description pr-Des5">
                {projectsData.map((category, index) => (
                    <Accordion key={index} subject={category.subject} projects={category.projects} />
                ))}
            </div>
        </div>
    );
}

export default Project5;