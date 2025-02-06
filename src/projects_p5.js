import React from "react";
import Accordion from "./accordion";
import imagesSrc from "./imagesSrc";

import awsImg2 from "./images/AWS/statemachines/Code for Transcription.png";
import awsImg1 from "./images/AWS/statemachines/s1.png";
import awsImg3 from "./images/AWS/statemachines/s2.png";
import awsImg4 from "./images/AWS/statemachines/s3.png";
import awsImg5 from "./images/AWS/weatherChatBot/weatherEP_today.png";
import awsImg6 from "./images/AWS/weatherChatBot/weatherEP_5days.png";
import awsImg7 from "./images/AWS/weatherChatBot/weatherDenver_today.png";
import awsImg8 from "./images/AWS/weatherChatBot/weatherDenver_5days.png";
import flutter_bitcoin from "./images/Flutter/bitcoin_video.mp4";
import flutter_bitcoin2 from "./images/Flutter/bitcoin_image1.jpg";
import flutter_bitcoin3 from "./images/Flutter/bitcoin_image2.jpg";
import flutter_quizApp_loading from "./images/Flutter/quizApp_loading.mp4";
import flutter_quizApp_ansSelection from "./images/Flutter/quizApp_answerSelection.mp4";
import flutter_quizApp_logIn from "./images/Flutter/quizApp_login.jpg";
import flutter_quizApp_logInError from  "./images/Flutter/quizApp_loginError.jpg";
import flutter_quizApp_questionSample1 from  "./images/Flutter/quizApp_questionSample.jpg";
import flutter_quizApp_questionSample2 from "./images/Flutter/quizApp_qSample2.jpg";
import flutter_quizApp_checkQuestions from "./images/Flutter/quizApp_checkquestions.jpg";
import flutter_quizApp_results from "./images/Flutter/quizApp_results.jpg";
import flutter_quizApp_review from "./images/Flutter/quizApp_review.jpg";
import flutter_quizApp_numQuestions from "./images/Flutter/quizApp_numQuestions.jpg";


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
                        { type:'image', source: awsImg1, title: 'Slide 1', description: "#1a Transcribe an .mp4 using AWS Transcribe Service"},
                        { type:'image', source: awsImg2, title: 'Slide 2', description: "#1b ~Code~"},
                        { type:'image', source: awsImg3, title: 'Slide 3', description: "#2a Translate transcription using AWS Transcription Service"},
                        { type:'image', source: awsImg4, title: 'Slide 4', description: "#3a Added a Parallel State to translate and create a poem"}
                        
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
                        { type:'image', source: awsImg5, title: 'Slide 1', description: "1. Results for today's weather for El Paso, TX"},
                        { type:'image', source: awsImg6, title: 'Slide 2', description: "2. Results for a 5 days' forecast for El Paso, TX"},
                        { type:'image', source: awsImg7, title: 'Slide 3', description: "3. Results for today's weather for Denver, Colorado"},
                        { type:'image', source: awsImg8, title: 'Slide 4', description: "4. Results for a 5 days' forecast for Denver, colorado"}
                ]
            }
        // Add more projects here
        ],
    },
    {
        subject: "Flutter",
        projects: [
            {
                cardTitle:"Build-A-Car",
                teamSize:2,
                objective:"Create an app that integrates with a public API to gather and display real-time car data to users, providing an interactive and user-friendly interface.",
                resources:"car API",
                cardDescription:`
                    <p>In this application, we developed a tool that recommends cars available in local dealerships.</p>
                    <p>Users can customize their car preferences by selecting options such as <strong>Year</strong>, <strong>Make</strong>, <strong>Model</strong>, <strong>Number of Doors</strong>, <strong>Drive</strong>, and <strong>Fuel Type</strong>.</p>
                    <p>The app then generates a list of recommended vehicles, ranked by how well they match the user's criteria.</p>
                    <p>
                    <span className: "description_bold">Car Customization:</span> Users can specify their preferred car options. <br>
                    <span className: "description_bold">Recommendation Engine:</span> The app filters and displays cars based on user preferences.<br>
                    <span className: "description_bold"><strong>Favorites List:</strong></span> Users can save their preferred cars for quick access.<br>
                    <span className: "description_bold"><strong>Detailed View:</strong></span> Each car listing includes a map showing the dealership location, contact details, and additional car information.
                    </p>
                    <p>The app provides an intuitive and interactive experience, allowing users to efficiently find and explore their ideal vehicles from local dealerships.</p>
                    `
                ,
                hashTags: "#Flutter #Dart #CarRecommendation #MobileAppDevelopment #APIIntegration #AppDevelopment #VehicleFinder #UIUXDesign #CrossPlatformDevelopment #TechForCars",
                gitLink:"https://github.com/carevilla/Build-A-Car",
                slides:[
                        { type:'image', source: imagesSrc.buildACar.mainFamilyCar, title: 'Slide 1', description: "1. Main Page Family Car Tab"},
                        { type: 'image', source: imagesSrc.buildACar.mainSportsCar, title: 'Slide 2', description: "2. Main Page Sports Car Tab"},
                        { type: 'image', source: flutter_bitcoin3, title: 'Slide 3', description: "3. Sample"},

                ]
            },
            {
                cardTitle:"Quiz App",
                teamSize:1,
                objective:"Use an HTTP Request for Authentication and Quiz questions and use different Widgets",
                resources:"Web Service",
                cardDescription:"Created a quiz app using different kinds of Flutter Widgets. App had to do the following: (1) User had to log in through their credentials that were compared by an HTTP request. (2) There would be an alert dialog if credentials couldn't be verified. (3) There had to be a loading widget for any wait times. (4) The user could select amount of questions in the quiz. (5) The questions will be sourced from a collection available at a specified URL. (6) Users can navigate to the previous and next questions. (7) User can end the quiz and see their results. (8) Users can review each question along with their answers.",
                hashTags:"#Flutter #BackEnd #FrontEnd #Dart #HTTPRequest #Authentication",
                gitLink:"https://github.com/leilaale/flutter_QuizApp",
                slides:[
                        { type: 'image', source: flutter_quizApp_logIn, title: 'Slide 1', description: "1. Log In"},
                        { type: 'image', source: flutter_quizApp_logInError, title: 'Slide 2', description: "2. Log In Error"},
                        { type:'video', source: flutter_quizApp_loading, title: 'Slide 3', description: "3. Loading Indicator"},
                        { type: 'image', source: flutter_quizApp_numQuestions, title: 'Slide 4', description: "4. Select how any questions on quiz"},
                        { type: 'image', source: flutter_quizApp_questionSample1, title: 'Slide 5', description: "5. Question Sample 1"},
                        { type: 'image', source: flutter_quizApp_questionSample2, title: 'Slide 6', description: "6. Question Sample 2"},
                        { type: 'video', source: flutter_quizApp_ansSelection, title: 'Slide 7', description: "7. Answer Selection"},
                        { type: 'image', source: flutter_quizApp_checkQuestions, title: 'Slide 8', description: "8. Check Questions on Quiz"},
                        { type: 'image', source: flutter_quizApp_results, title: 'Slide 9', description: "9. See results"},
                        { type: 'image', source: flutter_quizApp_review, title: 'Slide 10', description: "10. Review Questions with Answers"},
                ]
            },
            {
                cardTitle:"Bitcoin Value from Coinbase API",
                teamSize:1,
                objective:"Use an API to gather information",
                resources:"Coinbase API",
                cardDescription:"Created a simple page design that would show the current value of Bitcoin. Main goal was to know how to call an API and showcase that information in the app. ",
                hashTags:"#Flutter #BackEnd #FrontEnd #Dart #Button",
                gitLink:"Null",
                slides:[
                        { type:'video', source: flutter_bitcoin, title: 'Slide 1', description: "1. Video Demonstration"},
                        { type: 'image', source: flutter_bitcoin2, title: 'Slide 2', description: "2. Sample"},
                        { type: 'image', source: flutter_bitcoin3, title: 'Slide 3', description: "3. Sample"},
                ]
            },
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