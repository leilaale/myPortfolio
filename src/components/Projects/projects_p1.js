import React from "react";
import imagesSrc from "../../imagesSrc";
import DOMPurify from "dompurify";

const Project1 = () => {
  const cardDescription = `The Mile Tracker App is designed to simplify mileage tracking for users, whether its for tax deductions or business reimbursements. The app integrates Firebase Authentication for secure login and Firestore Database for storing all user trip data.
    <br><br> On the homepage, users can start and stop tracking miles with ease, thanks to Google Maps Services APIs, which track their distance in real-time. The app prominently displays the current trip's miles, as well as the total miles for the current year, month, and week, giving users an instant overview of their progress. A bottom navigation bar provides access to three main sections: 
    <br><br><span className: "p1_des">Account: </span> Where users can view their profile and log out.
    <br><span className: "p1_des">Home:</span> The central hub for mileage tracking.
    <br><span className: "p1_des">Logs:</span> A detailed log of all trips, saved securely in Firestore, with filters for specific time periods.In the Logs section, users can view all their trips with the upcoming accordion-style layout, allowing for easy expansion and viewing of trip details.
    <br><br> A planned feature will also allow users to upload receipts for gas and other expenses, linking them directly to each trip for a comprehensive tracking experience.`;

  const sanitizedDescription = DOMPurify.sanitize(cardDescription);

  return (
    <div class="tab-projects active-p-tab" id="project1">
      <div class="project-title">
        <h1>GeoTrips</h1>
      </div>

      <div id="gallery-container-Car">
        <div id="gallery-Car">
          <figure>
            <img src={imagesSrc.geoTrips.home} alt="Main Page Tab 1" />
            <figcaption>Homepage</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <figure>
            <img src={imagesSrc.geoTrips.home2} alt="Main Page Tab 5" />
            <figcaption>Homepage 2</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>
          <figure>
            <img src={imagesSrc.geoTrips.account} alt="Favorite Item" />
            <figcaption>Account</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>
          <figure>
            <img src={imagesSrc.geoTrips.logs} alt="Main Page Search Bar" />
            <figcaption>Trips Log</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <figure>
            <img src={imagesSrc.geoTrips.signIn} alt="Side Bar" />
            <figcaption>Sign In</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <figure>
            <img src={imagesSrc.geoTrips.signIn2} alt="Log In Page" />
            <figcaption>Sign In 2</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <figure>
            <img src={imagesSrc.geoTrips.signUp} alt="Log In Error" />
            <figcaption>Sign Up</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>
        </div>
      </div>
      <div class="project-description">
        <div class="description_2">
          <p>
            <span id="project-subtitle">Class: </span> Self-Project
          </p>
          <p>
            <span>Skills Learned:</span> Flutter, Cross-programming, REST APIs,
            Firebase Authorization, Firestore Database, State Management
          </p>
          <p>
            <span>Soft Skills:</span> Team work, Presentation Skills,
            Initiative, Problem-Solving, Time Management
          </p>
          <p>
            <span>Team size:</span> 1 (Individual)
          </p>
          <p>
            <span>Description: </span>
            <span
              className="projectCard_InnerDescription"
              dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            ></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project1;
