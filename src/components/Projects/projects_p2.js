import React from "react";
import ep_MainPage from "../../images/ep_database/ep_mainPage.png";
import ep_Login from "../../images/ep_database/ep_login.png";
import ep_menu2 from "../../images/ep_database/ep_Menu2.png";
import ep_bussAct from "../../images/ep_database/ep_businessAct.png";
import ep_bussExpensive from "../../images/ep_database/ep_businessExpensive.png";
import ep_bussLocations from "../../images/ep_database/ep_businessLocations.png";
import ep_bussOwners from "../../images/ep_database/ep_businessOwners.png";
import ep_bussRisk from "../../images/ep_database/ep_businessRisk.png";
import ep_bussType from "../../images/ep_database/ep_businessType.png";
import ep_expiredLicenses from "../../images/ep_database/ep_expiredLicences.png";
import ep_editRecords from "../../images/ep_database/ep_editRecords.png";
import ep_paymentPosition from "../../images/ep_database/ep_paymentPosition.png";
import ep_tableActive from "../../images/ep_database/ep_tableActive.png";
import ep_tableActivity from "../../images/ep_database/ep_tableActivity.png";
import ep_tableAgent from "../../images/ep_database/ep_tableAgent.png";
import ep_tableBusiness from "../../images/ep_database/ep_tableBusiness.png";
import ep_tableBussOwners from "../../images/ep_database/ep_tableBusOwners.png";
import ep_tableEmployee from "../../images/ep_database/ep_tableEmployee.png";
import ep_tableLicense from "../../images/ep_database/ep_tableLicense.png";
import ep_tableLocations from "../../images/ep_database/ep_tableLocation.png";
import ep_tableOwners from "../../images/ep_database/ep_tableOwners.png";
import ep_erDiagram from "../../images/ep_database/ep_erDiagram.png";

const Project2 = () => {
  return (
    <div class="tab-projects" id="project2">
      <div class="project-title">
        <h1>El Paso Tourism Database</h1>
      </div>
      <div class="project-description pr-Des2">
        <div class="description_2">
          <p>
            <span id="project-subtitle">Class: </span> Database Management
          </p>
          <p>
            <span>Skills Learned:</span> MySQL, HTML, GIT, PHP, Database
            Management
          </p>
          <p>
            <span>Soft Skills:</span> Team work, Presentation Skills,
            Problem-Solving, Time Management, Communication
          </p>
          <p>
            <span>Team size:</span> 4
          </p>
          <p>
            <span>Description: </span>
            <br />
            <br />
            <span id="sub-title">Prompt Given: </span>
            El Paso Council wants a database server where they can see what
            tourist business had been approved to function. The database would
            contain Business information, Owner and Employee Information of the
            Business, who had approved/disapproved the license, license
            information, etc.
            <br />
            <br />
            We were to create a ER-Diagram to know the relations, know what the
            system shall do, and create the database and the website. The
            website had to also allow for admin users to add, delete, or modify
            information while general users could only view information.
          </p>
        </div>
        <p>
          <span id="gallery-title">GALLERY</span>
        </p>
        <p>(All information shown was created with AI)</p>
        <div class="gallery-container-pr2">
          <div class="gallery-pr2">
            <figure>
              <img src={ep_MainPage} alt="Main Page" />
            </figure>
            <figure>
              <img src={ep_Login} alt="Log In" />
            </figure>
            <figure>
              <img src={ep_menu2} alt="Menu" />
            </figure>
            <figure>
              <img src={ep_bussAct} alt="Business Activities" />
            </figure>
            <figure>
              <img src={ep_bussExpensive} alt="Business Expensive" />
            </figure>
            <figure>
              <img src={ep_bussLocations} alt=" Business Locations" />
            </figure>
            <figure>
              <img src={ep_bussOwners} alt="Business Owners" />
            </figure>
            <figure>
              <img src={ep_bussRisk} alt="Business Risks" />
            </figure>
            <figure>
              <img src={ep_bussType} alt="Business Type" />
            </figure>
            <figure>
              <img src={ep_expiredLicenses} alt="Expired Licenses" />
            </figure>
            <figure>
              <img src={ep_editRecords} alt="Edit Records" />
            </figure>
            <figure>
              <img
                src={ep_paymentPosition}
                alt="Payment for Employment Position"
              />
            </figure>
            <figure>
              <img src={ep_tableActive} alt="Table for active licenses" />
            </figure>
            <figure>
              <img src={ep_tableActivity} alt="Table for Business Activities" />
            </figure>
            <figure>
              <img src={ep_tableAgent} alt="Table for agents" />
            </figure>
            <figure>
              <img src={ep_tableBusiness} alt="Table for all businesses" />
            </figure>
            <figure>
              <img
                src={ep_tableBussOwners}
                alt="Table shows all owners of a business"
              />
            </figure>
            <figure>
              <img
                src={ep_tableEmployee}
                alt="Table shows all employees of a business"
              />
            </figure>
            <figure>
              <img src={ep_tableLicense} alt="Shows all Licenses" />
            </figure>
            <figure>
              <img src={ep_tableLocations} alt="Shows all Locations" />
            </figure>
            <figure>
              <img src={ep_tableOwners} alt="Shows all owners" />
            </figure>
            <figure>
              <img src={ep_erDiagram} alt="Shows ER diagram" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
