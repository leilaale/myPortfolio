import React from "react";
import pr_LogIn from './images/practicum/p_logIn.png';
import pr_UploadPage from './images/practicum/p_proposalUpload.png';
import pr_UploadPage2 from './images/practicum/p_proposalUpload2.png';
import pr_proposalAnalysis from './images/practicum/p_proposalAnalysis.png';
import pr_researchStrengths from './images/practicum/p_proposalStrengths3.png';
import pr_researchAreas from './images/practicum/p_researchAreas_Blurred.png';
import pr_proposalMetrics from './images/practicum/p_proposalMetrics.png';
import pr_proposalMetricsProfessors from './images/practicum/p_metricsProfessors.png';
import pr_SearchPage from './images/practicum/p_search.png';
import pr_SearchPage2 from './images/practicum/p_search3.png';
import pr_SearchPage3 from './images/practicum/p_search2.png';



const Project3 = () => {
    return (
        <div class = "tab-projects" id="project3">
                        <div class = "project-title">
                            <h1>UTEP Practicum</h1>
                        </div>
                        <div class = "project-description pr-Des3">
                            <div class = 'description_2'>
                                <p><span id="project-subtitle">Class: </span> Software Practicum </p>
                                <p><span>Skills Learned:</span> MongoDB, HTML, Javascript, CSS, GIT, Database Management, Flask, Keybert, LLM, OpenAI, API</p>
                                <p><span>Soft Skills:</span> Team work, Presentation Skills, Problem-Solving, Time Management, Communication,, Initiative in unknown subjects</p>
                                <p><span>Team size:</span> 4</p>
                                <p><span>Description: </span> The following was what I was in charged of:<br /><br /> 
                                    <span id = 'sub-title-pr3'>Client Wants: </span>
                                    The client wanted a website that would extract topics from each pdf proposal they had. A page that would show an analysis of what research areas,
                                    the University of Texas at El Paso had been most funded in. They wanted to also have a predictor model that allows them to upload a proposal, and let them know the
                                    probability of it being funded and what professors should be in charged of the project.
                                    <br /><br />
                                    <span id = 'sub-title-pr3'>Creating Research Areas with OpenAI: </span>
                                    Using a prompt, I called openAi to create 20 research areas with 20 keywords each for each College and Department. I then tokenized
                                    each word in the list and got an average embedding of the list. This embedding was saved to MongoDB with the research area and keywords.
                                    In total we gathered 947 different research areas.
                                    <br /><br />
                                    <span id = 'sub-title-pr3'>Extracting Topics: </span>
                                    After extracting the text from the pdf, I used Keybert library in Python to extract 15 keywords 
                                    from the proposal's abstract. Keybert uses BERT-embeddings and simple cosine similarity to find the sub-phrases in 
                                    a document that are the most similar to the document itself. The keywords were then tokenized and an average embedding of the list was
                                    made and saved into MongoDB. 
                                    <br /><br />
                                    <span id = 'sub-title-pr3'>Getting Research Areas: </span>
                                    With the embeddings from the extracted keywords of the proposal, we compared them to each Research Area's embedding with Cosine Similarity. 
                                    We saved the top 5 highest result for each proposal in MongoDB. <br />
                                    Note: Cosine Similarity works as follows -{'>'} 0 meaning there is no similarity -{'>'} 1 meaning they are the same.
                                    <br /><br />
                                    <span id = 'sub-title-pr3'>Search Page: </span>
                                    Please view Figure 10 to see how it works. This has a similar process as previously described. 
                                </p> 
                            </div>
                            <p><span id = "gallery-title">GALLERY</span></p>
                            <p>(Information will be blurred due to confidentiality)</p>
                            <div class="gallery-container-pr3" >
                                <div class="gallery-pr3">
                                    <figure>
                                        <figcaption>1. Log In Page</figcaption>
                                        <img src={pr_LogIn} alt="Log In Page" />
                                    </figure>
                                    <figure>
                                        <figcaption>2. Upload Page</figcaption>
                                        <img src={pr_UploadPage} alt="Upload Page 1"  />                                    
                                    </figure>
                                    <figure>
                                        <figcaption>3. Upload Page 2</figcaption>
                                        <img src={pr_UploadPage2} alt="Upload Page 2"  />
                                    </figure>
                                    <figure>
                                        <figcaption>4. Proposal Analysis</figcaption>
                                        <img src={pr_proposalAnalysis} alt="Proposal Analysis"  />
                                    </figure>
                                    <figure>
                                        <figcaption>5. Research Strengths</figcaption>
                                        <img src={pr_researchStrengths} alt="Research Strengths"  />
                                    </figure>
                                    <figure>
                                        <figcaption>6. Research Areas</figcaption>
                                        <img src={pr_researchAreas} alt="Research Areas"  />
                                    </figure>
                                    <figure>
                                        <figcaption>7. Proposal Metrics</figcaption>
                                        <img src={pr_proposalMetrics} alt="Proposal Metrics"  />
                                    </figure>
                                    <figure>
                                        <figcaption>8. Proposal Metrics - Shows ProfessorsPa</figcaption>
                                        <img src={pr_proposalMetricsProfessors} alt="Proposal Metrics"  />
                                    </figure>
                                    <figure>
                                        <figcaption>9. Search Page</figcaption>
                                        <img src={pr_SearchPage} alt="Search Page"  />
                                    </figure>
                                    <figure>
                                        <figcaption>10. Search Page 2 - How it Works</figcaption>
                                        <img src={pr_SearchPage2} alt="Search Page"  />
                                    </figure>
                                    <figure>
                                        <figcaption>11. Search Page 3 - Results Sample</figcaption>
                                        <img src={pr_SearchPage3} alt="Search Page"  />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}

export default Project3;