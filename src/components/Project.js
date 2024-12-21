import React from "react";
import "../styles/project.css"; // Assuming your CSS styles are stored here

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        <div className="project-container">
          <article className="project">
            <img
              src="./crud-jwt.webp"
              alt="Employee CRUD"
              className="project-img"
            />
            <h3 className="project-title">Employee CRUD Operations</h3>
            <div className="project-buttons">
              <button
                className="btn"
                onClick={() =>
                  window.open("https://github.com/narasimha322/employee-crud-jwt", "_blank")
                }
              >
                GitHub
              </button>
              
            </div>
          </article>
          <article className="project">
            <img
              src="./blog.webp"
              alt="Blogs with JWT"
              className="project-img"
            />
            <h3 className="project-title">Blogs with JWT</h3>
            <div className="project-buttons">
              <button
                className="btn"
                onClick={() =>
                  window.open("https://github.com/narasimha322/blogs-comments", "_blank")
                }
              >
                GitHub
              </button>
              
            </div>
          </article>
        </div>
      </div>
      
    </section>
  );
}

export default Projects;
