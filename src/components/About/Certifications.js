import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./About.module.css";

const CertificationsTab = () => {
  const certifications = [
    {
      title: "Create High-Fidelity Designs and Prototypes in Figma",
      date: "Feb. 2024",
      org: "Coursera & Google",
      id: "E8YQ9BZLDQC2",
      link: "https://www.coursera.org/account/accomplishments/records/E8YQ9BZLDQC2",
    },
    {
      title: "Conduct UX Research and Test Early Concepts",
      date: "Aug. 2023",
      org: "Coursera & Google",
      id: "22be41df443e3c73a0167c9836983e5b",
      link: "https://coursera.org/share/22be41df443e3c73a0167c9836983e5b",
    },
    {
      title: "Build Wireframes and Low-Fidelity Prototypes",
      date: "June 2023",
      org: "Coursera & Google",
      id: "5HWJX8DNDV8W",
      link: "https://www.coursera.org/account/accomplishments/certificate/5HWJX8DNDV8W",
    },
    {
      title: "Start the UX Design Process: Empathize, Define, and Ideate",
      date: "June 2023",
      org: "Coursera & Google",
      id: "MAF8HBZVQK5B",
      link: "https://www.coursera.org/account/accomplishments/certificate/MAF8HBZVQK5B",
    },
    {
      title: "Foundations of User Experience (UX) Design",
      date: "Feb. 2023",
      org: "Coursera & Google",
      id: "Q2HT3XES56UW",
      link: "https://www.coursera.org/account/accomplishments/certificate/Q2HT3XES56UW",
    },
    {
      title: "Kotlin",
      date: "Feb. 2023",
      org: "Sololearn",
      id: "CT-C21JHSPO",
      link: "https://www.sololearn.com/certificates/CT-C21JHSPO",
    },
    {
      title: "SQL",
      date: "Feb. 2023",
      org: "Sololearn",
      id: "CT-ESOE27XB",
      link: "https://www.sololearn.com/certificates/CT-ESOE27XB",
    },
    {
      title: "Python",
      date: "Jan. 2023",
      org: "Sololearn",
      id: "CT-FZITTWJK",
      link: "https://www.sololearn.com/certificates/CT-FZITTWJK",
    },
    {
      title: "Java",
      date: "May 2022",
      org: "Sololearn",
      id: "24877179-1068",
      link: "https://www.sololearn.com/certificates/course/en/24877179/1068/landscape/png",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {certifications.map((cert, index) => (
          <div className={styles.styleWrapper} key={index}>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCardLink}
            >
              <div className={styles.certCard}>
                <h4>{cert.title}</h4>
                <p>{cert.org}</p>
                <p>{cert.date}</p>
                <p>ID: {cert.id}</p>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CertificationsTab;
