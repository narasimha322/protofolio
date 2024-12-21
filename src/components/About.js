import React from "react";
import "../about.css"; // Assuming your CSS styles are stored here

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./about-pic.png"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Certifications</h3>
              <p>
                {" "}
                <br />
                Frontend Development
              </p>
            </div>
            <div className="details-container">
              <img
                src="./education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.Tech <br /> C.S.E
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Hi, I'm Narasimha Reddy, a passionate Frontend Developer with
              experience in HTML, CSS, JavaScript, and React.js. I specialize in
              creating visually appealing and user-friendly interfaces for
              websites. My focus is on building responsive and efficient designs
              that enhance the user experience. I'm always eager to learn and
              contribute to exciting web development projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
