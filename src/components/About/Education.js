import React from "react";

const EducationTab = () => {
  return (
    <div className="education-section">
      <div className="edu-item">
        <h3 className="degree">M.S. Software Engineering</h3>
        <p className="school">University of Texas at El Paso (UTEP)</p>
        <div className="edu-meta">
          <span className="gpa">GPA: 4.0</span>
          <span className="date">Jan 2023 – May 2024</span>
        </div>
      </div>

      <div className="edu-item">
        <h3 className="degree">B.S. Biology, Pre-Med Concentration</h3>
        <p className="school">University of Texas at El Paso (UTEP)</p>
        <div className="edu-meta">
          <span className="gpa">GPA: 3.75</span>
          <span className="date">Aug 2015 – May 2019</span>
        </div>
      </div>
    </div>
  );
};

export default EducationTab;
