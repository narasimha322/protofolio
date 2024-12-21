import React from "react";
import "../skills.css"; // Assuming your CSS styles are stored here

function Skills() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src="./checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Good</p>
                </div>
              </article>
              <article>
                <img
                  src="./checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Good</p>
                </div>
              </article>
              <article>
                <img
                  src="./checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="./checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React.js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src="./checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="./checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="./checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src="./checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
